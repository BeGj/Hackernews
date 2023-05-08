import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  combineLatest,
  concatMap,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { HnComment, HnPost } from 'src/app/core/models/hn-items.model';
import { HackernewsService } from 'src/app/core/services/hackernews.service';
import { CommentComponent } from './comment/comment.component';

import { LetModule, PushModule } from '@ngrx/component';
import { HnFirebaseService } from 'src/app/core/services/hn-firebase.service';
@Component({
  selector: 'app-view-post',
  standalone: true,
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    CommentComponent,
    LetModule,
    PushModule,
  ],
})
export class ViewPostComponent {
  @Input({ required: true }) set postId(id: number) {
    this.postIdChanged$.next(id);
  }
  postIdChanged$ = new ReplaySubject<number>();
  post$: Observable<HnPost> = this.postIdChanged$.pipe(
    concatMap((id) => this.firebase.fetchPost(id)),
    tap((post) => {
      this.title.setTitle(`Post: ${post.title}`);
    }),
    shareReplay()
  );
  commentsLoading$ = new BehaviorSubject(false);
  comments$: Observable<HnComment[]> = this.post$.pipe(
    switchMap((post) => {
      if (post.kids && post.kids.length > 0) {
        return combineLatest(
          post.kids.map((commentId) => this.firebase.fetchComment(commentId))
        );
      } else {
        return of([]);
      }
    })
  );

  linkIframeVisible = new BehaviorSubject(false);
  constructor(
    private hn: HackernewsService,
    protected sanitizer: DomSanitizer,
    private title: Title,
    private firebase: HnFirebaseService
  ) {}
}
