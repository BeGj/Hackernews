import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  limitToFirst,
  onValue,
  query,
  ref,
} from 'firebase/database';
import { Observable } from 'rxjs';
import { HnComment, HnPost } from '../models/hn-items.model';
@Injectable({
  providedIn: 'root',
})
export class HnFirebaseService {
  firebase = initializeApp({
    databaseURL: 'https://hacker-news.firebaseio.com',
  });
  database = getDatabase(this.firebase);

  fetchPost(id: number): Observable<HnPost> {
    const itemRef = ref(this.database, 'v0/item/' + id);
    return new Observable((subscriber) => {
      onValue(itemRef, (snapshot) => {
        subscriber.next(snapshot.val());
      });
    });
  }

  fetchComment(id: number): Observable<HnComment> {
    const itemRef = ref(this.database, 'v0/item/' + id);
    return new Observable((subscriber) => {
      onValue(itemRef, (snapshot) => {
        subscriber.next(snapshot.val());
      });
    });
  }

  fetchTopPosts(first?: number, last?: number): Observable<number[]> {
    if (first !== undefined && last !== undefined) {
      // return postIds.slice(first, last);
    } else if (first !== undefined && last === undefined) {
      last = first + 50 > 499 ? 499 : first + 50;
      // return postIds.slice(first, last);
    } else if (first === undefined && last !== undefined) {
      first = last - 50 < 0 ? 0 : last - 50;
      // return postIds.slice(first, last);
    } else {
      first = 0;
      last = 50;
    }

    const listRef = ref(this.database, 'v0/topstories');
    const listQueryRef = query(listRef, limitToFirst(last));

    return new Observable((subscriber) => {
      onValue(listQueryRef, (snapshot) => {
        subscriber.next(snapshot.val());
      });
    });
  }
}
