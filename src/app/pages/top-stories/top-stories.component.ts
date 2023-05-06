import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackernewsService } from 'src/app/core/services/hackernews.service';
import {
  BehaviorSubject,
  ReplaySubject,
  concatMap,
  forkJoin,
  map,
  tap,
  withLatestFrom,
} from 'rxjs';
import { RouterModule } from '@angular/router';
import { UrlPreviewPipe } from 'src/app/core/pipes/url-preview.pipe';

@Component({
  selector: 'app-top-stories',
  standalone: true,
  imports: [CommonModule, RouterModule, UrlPreviewPipe],
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopStoriesComponent {
  public triggerTopStoriesLoad$ = new ReplaySubject();

  private firstStoryIndex$ = new BehaviorSubject(0);
  private lastStoryIndex$ = new BehaviorSubject(50);

  protected storiesCount$ = new BehaviorSubject(0);
  protected storiesLoading = new BehaviorSubject(true);
  protected storiesContentLoading = new BehaviorSubject(false);

  private fetchTopStoryIds$ = this.hn.fetchTopStories().pipe(
    tap((stories) => {
      this.storiesLoading.next(false);
      this.storiesCount$.next(stories.length);
    })
  );

  public topStories$ = this.triggerTopStoriesLoad$.pipe(
    concatMap(() => this.fetchTopStoryIds$),
    tap(() => {
      this.storiesContentLoading.next(true);
    }),
    withLatestFrom(this.firstStoryIndex$, this.lastStoryIndex$),
    concatMap(([stories, first, last]) =>
      forkJoin(stories.slice(first, last).map((id) => this.hn.fetchStory(id)))
    ),
    map((stories) =>
      stories.filter((story) => ['story', 'ask'].includes(story.type))
    ),
    tap(() => {
      this.storiesLoading.next(false);
      this.storiesContentLoading.next(false);
    })
  );

  constructor(private hn: HackernewsService) {
    this.triggerTopStoriesLoad$.next(true);
  }
}
