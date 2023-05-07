import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackernewsService } from 'src/app/core/services/hackernews.service';
import { HnPost } from 'src/app/core/models/hn-items.model';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  concatMap,
  forkJoin,
  of,
  shareReplay,
  tap,
} from 'rxjs';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';

import { LetModule, PushModule } from '@ngrx/component';
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
    concatMap((id) => this.hn.fetchPost(id)),
    tap((post) => {
      this.title.setTitle(`Post: ${post.title}`);
    }),
    shareReplay()
  );
  commentsLoading$ = new BehaviorSubject(false);
  comments$ = this.post$.pipe(
    concatMap((post) => {
      if (post.kids && post.kids.length > 0) {
        return forkJoin(
          post.kids.map((commentId) => this.hn.fetchComment(commentId))
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
    private title: Title
  ) {}
}
