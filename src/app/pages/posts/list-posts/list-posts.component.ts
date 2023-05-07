import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackernewsService } from 'src/app/core/services/hackernews.service';
import {
  BehaviorSubject,
  ReplaySubject,
  combineLatest,
  concatMap,
  forkJoin,
  map,
  merge,
  of,
  shareReplay,
  tap,
  withLatestFrom,
} from 'rxjs';
import { RouterModule } from '@angular/router';
import { UrlPreviewPipe } from 'src/app/core/pipes/url-preview.pipe';
import { SavedPostsService } from 'src/app/core/services/saved-posts.service';
import { HnPostWithSaved } from 'src/app/core/models/hn-items.model';
import { HnFirebaseService } from 'src/app/core/services/hn-firebase.service';
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

  private firstPostIndex$ = new BehaviorSubject(0);
  private lastPostIndex$ = new BehaviorSubject(50);

  protected postsLoading$ = new BehaviorSubject(true);
  protected postsContentLoading$ = new BehaviorSubject(false);

  private postIds$ = this.triggerPostsLoad$.pipe(
    tap((type) => {
      this.postsLoading$.next(true);
      this.postsContentLoading$.next(true);
    }),
    concatMap((postsPageType) => {
      switch (postsPageType) {
        case 'saved-posts':
          return this.savedPostsService.getSavedPosts$();
        case 'top-posts':
          return this.hnService.fetchTopPosts();
        default:
          console.log('Error. No PostsPageType');
          return of([]);
      }
    }),
    withLatestFrom(this.firstPostIndex$, this.lastPostIndex$),
    // Slice postIds array to not fetch over 50 posts.
    map(([postIds, first, last]) => {
      return postIds.slice(first, last);
    }),
    tap((postIds) => {
      this.postsLoading$.next(false);
    }),
    shareReplay()
  );

  // Update saved variable on update from either observables
  protected posts$ = combineLatest([
    // on posts update
    this.postIds$.pipe(
      concatMap((postIds) => {
        if (postIds.length > 0) {
          return forkJoin(
            postIds.map((id) => {
              return this.hnService.fetchPost(id);
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
    tap((posts) => {
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
    private hnService: HackernewsService,
    protected savedPostsService: SavedPostsService,
    private firebase: HnFirebaseService
  ) {}
}
