import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';
import { HnPostJob } from '../models/hn-items.model';
@Injectable({
  providedIn: 'root',
})
export class HnFirebaseService {
  firebase = initializeApp({
    databaseURL: 'https://hacker-news.firebaseio.com',
  });
  database = getDatabase(this.firebase);

  fetchPost(id: number): Observable<HnPostJob> {
    // return of()

    const itemRef = ref(this.database, 'v0/item/' + id);
    return new Observable((subscriber) => {
      onValue(itemRef, (snapshot) => {
        subscriber.next(snapshot.val());
      });
    });
  }
}
