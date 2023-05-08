import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BehaviorSubject,
  ReplaySubject,
  combineLatest,
  map,
  merge,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { HnPostWithSaved } from 'src/app/core/models/hn-items.model';
import { UrlPreviewPipe } from 'src/app/core/pipes/url-preview.pipe';
import { HnFirebaseService } from 'src/app/core/services/hn-firebase.service';
import { SavedPostsService } from 'src/app/core/services/saved-posts.service';
import { ListViewPostComponent } from './list-view-post/list-view-post.component';

import { LetModule, PushModule } from '@ngrx/component';
export type PostsPageType = 'top-posts' | 'saved-posts';
@Component({
  selector: 'app-list-posts',
  standalone: true,
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    UrlPreviewPipe,
    ListViewPostComponent,
    LetModule,
    PushModule,
  ],
})
export class ListPostsComponent {
  @Input() set postsPageType(postsPageType: PostsPageType) {
    this.triggerPostsLoad$.next(postsPageType);
  }
  private triggerPostsLoad$ = new ReplaySubject<PostsPageType>();
  protected pageTitle$ = this.triggerPostsLoad$.pipe(
    map((page) => {
      switch (page) {
        case 'saved-posts':
          return 'Your saved posts';
        default:
          return 'Top posts';
      }
    }),
    shareReplay()
  );

  protected firstPostIndex$ = new BehaviorSubject<number>(0);
  protected lastPostIndex$ = new BehaviorSubject<number>(12);

  protected postsLoading$ = new BehaviorSubject(true);
  protected postsContentLoading$ = new BehaviorSubject(false);

  private postIds$ = combineLatest([
    this.firstPostIndex$,
    this.lastPostIndex$,
    this.triggerPostsLoad$,
  ]).pipe(
    tap((a) => {
      this.postsLoading$.next(true);
      this.postsContentLoading$.next(true);
    }),
    switchMap(([first, last, postsPageType]) => {
      switch (postsPageType) {
        case 'saved-posts':
          return this.savedPostsService.getSavedPosts$(first, last);
        case 'top-posts':
          return this.firebase.fetchTopPosts(first, last);
        default:
          console.log('Error. No PostsPageType');
          return of([]);
      }
    }),
    tap((a) => {
      this.postsLoading$.next(false);
    }),
    shareReplay()
  );

  // Update saved variable on update from either observables
  protected posts$ = combineLatest([
    // on posts update
    this.postIds$.pipe(
      switchMap((postIds) => {
        if (postIds.length > 0) {
          return combineLatest(
            postIds.map((id) => {
              return this.firebase.fetchPost(id);
            })
          );
        } else {
          return of([]);
        }
      }),
      map((posts) => {
        return posts.filter((post) => post.type === 'story'); // ['story'].includes(post.type)
      }) // to remove jobs from list
    ),
    // on saved posts update
    this.savedPostsService.getSavedPosts$(),
  ]).pipe(
    map(([posts, savedPostIds]) => {
      return posts.map((post) => {
        return {
          ...post,
          saved: savedPostIds.includes(post.id),
        } as HnPostWithSaved;
      });
    }),
    tap(() => {
      this.postsContentLoading$.next(false);
    }),
    shareReplay()
  );

  protected postsCount$ = merge(
    this.postIds$.pipe(
      map((ids) => {
        return ids.length;
      })
    ),
    this.posts$.pipe(
      map((posts) => {
        return posts.length;
      })
    )
  );

  constructor(
    protected savedPostsService: SavedPostsService,
    private firebase: HnFirebaseService
  ) {}
}
