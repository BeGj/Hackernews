import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  BehaviorSubject,
  ReplaySubject,
  concatMap,
  filter,
  forkJoin,
  tap,
} from 'rxjs';
import { HnComment } from 'src/app/core/models/hn-items.model';
import { HackernewsService } from 'src/app/core/services/hackernews.service';

import { LetModule, PushModule } from '@ngrx/component';
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, RouterModule, LetModule, PushModule],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @Input({ required: true }) set comment(comment: HnComment) {
    this.comment$.next(comment);
  }
  @Input() hierarchyLevel = 0;

  protected subCommentLoading$ = new BehaviorSubject<boolean>(false);
  protected comment$ = new ReplaySubject<HnComment>();
  protected subComments$ = this.comment$.pipe(
    filter((comment) => !!comment && !!comment.kids && comment.kids.length > 0),
    tap(() => {
      this.subCommentLoading$.next(true);
    }),
    concatMap((comment) =>
      forkJoin(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        comment.kids!.map((commentId) => this.hn.fetchComment(commentId))
      )
    ),
    tap(() => {
      this.subCommentLoading$.next(false);
    })
  );

  protected toggleCommentVisibility = new BehaviorSubject(true);

  constructor(
    protected sanitizer: DomSanitizer,
    private hn: HackernewsService
  ) {}
}
