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
  of,
  shareReplay,
  tap,
  withLatestFrom,
} from 'rxjs';
import { RouterModule } from '@angular/router';
import { UrlPreviewPipe } from 'src/app/core/pipes/url-preview.pipe';
import { SavedStoriesService } from 'src/app/core/services/saved-stories.service';
import { HnStory } from 'src/app/core/models/hn-items.model';

export type StoriesPageType = 'top-stories' | 'saved-stories';
@Component({
  selector: 'app-top-stories',
  standalone: true,
  imports: [CommonModule, RouterModule, UrlPreviewPipe],
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopStoriesComponent {
  @Input() set storiesPageType(storiesPageType: StoriesPageType) {
    this.triggerStoriesLoad$.next(storiesPageType);
  }
  private triggerStoriesLoad$ = new ReplaySubject<StoriesPageType>();
  protected pageTitle$ = this.triggerStoriesLoad$.pipe(
    map((page) => {
      switch (page) {
        case 'saved-stories':
          return 'You saved stories';
        default:
          return 'Top stories';
      }
    })
  );

  private firstStoryIndex$ = new BehaviorSubject(0);
  private lastStoryIndex$ = new BehaviorSubject(50);

  protected storiesLoading$ = new BehaviorSubject(true);
  protected storiesContentLoading$ = new BehaviorSubject(false);

  storyIds$ = this.triggerStoriesLoad$.pipe(
    tap(() => {
      this.storiesLoading$.next(true);
      this.storiesContentLoading$.next(true);
    }),
    concatMap((storiesPageType) => {
      switch (storiesPageType) {
        case 'saved-stories':
          return this.savedStories.getSavedStories$();
        case 'top-stories':
          return this.hnService.fetchTopStories();
        default:
          console.log('Error. No StoriesPageType');
          return of([]);
      }
    }),
    withLatestFrom(this.firstStoryIndex$, this.lastStoryIndex$),
    // Slice storyIds array to not fetch over 50 stories.
    map(([storyIds, first, last]) => {
      return storyIds.slice(first, last);
    }),
    tap(() => {
      this.storiesLoading$.next(false);
    })
  );

  storiesCount$ = this.storyIds$.pipe(map((ids) => ids.length));

  // Update saved variable on update from either observables
  stories$ = combineLatest([
    // on stories update
    this.storyIds$.pipe(
      concatMap((stories) =>
        forkJoin(stories.map((id) => this.hnService.fetchStory(id)))
      ),
      map((stories) =>
        stories.filter((story) => ['story'].includes(story.type))
      ) // to remove jobs from list
    ),
    // on saved stories update
    this.savedStories.getSavedStories$(),
  ]).pipe(
    map(([stories, savedStoryIds]) => {
      return stories.map((story) => {
        return {
          ...story,
          saved: savedStoryIds.includes(story.id),
        } as HnStoryListView;
      });
    }),
    tap(() => {
      this.storiesContentLoading$.next(false);
    })
  );

  constructor(
    private hnService: HackernewsService,
    protected savedStories: SavedStoriesService
  ) {}
}

interface HnStoryListView extends HnStory {
  saved: boolean;
}
