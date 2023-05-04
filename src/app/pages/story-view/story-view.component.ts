import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackernewsService } from 'src/app/core/services/hackernews.service';
import { HnStory } from 'src/app/core/models/hn-items.model';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  concatMap,
  forkJoin,
  shareReplay,
  tap,
} from 'rxjs';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryViewComponent {
  @Input({ required: true }) set storyId(id: number) {
    this.storyIdChanged$.next(id);
  }
  storyIdChanged$ = new ReplaySubject<number>();
  story$: Observable<HnStory> = this.storyIdChanged$.pipe(
    concatMap((id) => this.hn.fetchStory(id)),
    tap((story) => {
      this.title.setTitle(`Story: ${story.title}`);
    }),
    shareReplay()
  );
  comments$ = this.story$.pipe(
    concatMap((story) =>
      forkJoin(story.kids.map((commentId) => this.hn.fetchComment(commentId)))
    )
  );

  linkIframeVisible = new BehaviorSubject(false);
  constructor(
    private hn: HackernewsService,
    protected sanitizer: DomSanitizer,
    private title: Title
  ) {}
}
