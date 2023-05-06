import { Injectable } from '@angular/core';
import { HnStory } from '../models/hn-items.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SavedStoriesService {
  private localStorageKey = 'saved-stories';
  private savedStoriesCache$ = new BehaviorSubject<number[]>([]);
  constructor() {
    this.savedStoriesCache$.next(this.loadSavedStoriesFromLocalStorage());
  }

  public saveStory(story: HnStory): void {
    const stories = this.savedStoriesCache$.value;
    stories.push(story.id);
    this.saveStoriesToLocalStorage(stories);
  }
  public unSaveStory(story: HnStory): void {
    const stories = this.savedStoriesCache$.value;
    this.saveStoriesToLocalStorage(stories.filter((id) => id !== story.id));
  }

  public getSavedStories$(): Observable<number[]> {
    return this.savedStoriesCache$.pipe();
  }

  private loadSavedStoriesFromLocalStorage(): number[] {
    let stories: number[] = [];
    const jsonStories = localStorage.getItem(this.localStorageKey);
    if (jsonStories) {
      stories = JSON.parse(jsonStories);
    }
    this.savedStoriesCache$.next(stories);
    return stories;
  }
  private saveStoriesToLocalStorage(stories: number[]): void {
    this.savedStoriesCache$.next(stories);
    localStorage.setItem(this.localStorageKey, JSON.stringify(stories));
  }
}
