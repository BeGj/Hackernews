import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  HnAsk,
  HnComment,
  HnPoll,
  HnPollOpt,
  HnPost,
  HnStory,
  HnUser,
} from '../models/hn-items.model';

@Injectable({
  providedIn: 'root',
})
export class HackernewsService {
  baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  constructor(private http: HttpClient) {}

  //#region Story fetchers
  fetchTopPosts(first?: number, last?: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}topstories.json`).pipe(
      map((postIds) => {
        if (first !== undefined && last !== undefined) {
          return postIds.slice(first, last);
        } else if (first !== undefined && last === undefined) {
          last = first + 50 > 499 ? 499 : first + 50;
          return postIds.slice(first, last);
        } else if (first === undefined && last !== undefined) {
          first = last - 50 < 0 ? 0 : last - 50;
          return postIds.slice(first, last);
        }
        return postIds;
      })
    );
  }

  fetchNewStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}newstories.json`);
  }

  fetchBestStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}beststories.json`);
  }
  //#endregion

  //#region Fetch Hn Item
  fetchPost(id: number): Observable<HnPost> {
    return this.http.get<HnPost>(`${this.baseUrl}item/${id}.json`);
  }
  fetchStory(id: number): Observable<HnStory> {
    return this.http.get<HnStory>(`${this.baseUrl}item/${id}.json`);
  }

  fetchComment(id: number): Observable<HnComment> {
    return this.http.get<HnComment>(`${this.baseUrl}item/${id}.json`);
  }

  fetchAsk(id: number): Observable<HnAsk> {
    return this.http.get<HnAsk>(`${this.baseUrl}item/${id}.json`);
  }

  fetchPoll(id: number): Observable<HnPoll> {
    return this.http.get<HnPoll>(`${this.baseUrl}item/${id}.json`);
  }

  fetchPollOpt(id: number): Observable<HnPollOpt> {
    return this.http.get<HnPollOpt>(`${this.baseUrl}item/${id}.json`);
  }
  //#endregion

  fetchUser(id: string): Observable<HnUser> {
    return this.http.get<HnUser>(`${this.baseUrl}user/${id}.json`);
  }
}
