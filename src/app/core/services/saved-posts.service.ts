import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SavedPostsService {
  private localStorageKey = 'saved-posts';
  private savedPostsCache$ = new BehaviorSubject<number[]>([]);
  constructor() {
    this.loadSavedPostsFromLocalStorage();
    this.updateCacheWhenLocalstorageChanges();
  }

  public savePost(postId: number): void {
    const posts = this.savedPostsCache$.value;
    posts.push(postId);
    this.savePostsToLocalStorageAndCache(posts);
  }
  public unSavePost(postId: number): void {
    const posts = this.savedPostsCache$.value;
    this.savePostsToLocalStorageAndCache(posts.filter((id) => id !== postId));
  }
  public getSavedPosts$(): Observable<number[]> {
    return this.savedPostsCache$.pipe();
  }

  private loadSavedPostsFromLocalStorage(): number[] {
    let posts: number[] = [];
    const jsonPostsIds = localStorage.getItem(this.localStorageKey);
    if (jsonPostsIds) {
      posts = JSON.parse(jsonPostsIds);
    }
    this.savedPostsCache$.next(posts);
    return posts;
  }

  private updateCacheWhenLocalstorageChanges(): void {
    addEventListener('storage', (event) => {
      if (event.key === this.localStorageKey) {
        let update: number[] = [];
        if (event.newValue) {
          update = JSON.parse(event.newValue);
        } else {
          update = [];
        }
        this.savedPostsCache$.next(update);
      }
    });
  }

  private savePostsToLocalStorageAndCache(postIds: number[]): void {
    this.savedPostsCache$.next(postIds);
    localStorage.setItem(this.localStorageKey, JSON.stringify(postIds));
  }
}
