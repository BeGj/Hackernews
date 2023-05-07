import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HnStory,
  HnComment,
  HnAsk,
  HnPoll,
  HnPollOpt,
  HnUser,
} from '../models/hn-items.model';

@Injectable({
  providedIn: 'root',
})
export class HackernewsService {
  baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  constructor(private http: HttpClient) {}

  //#region Story fetchers
  fetchTopStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}topstories.json`);
  }

  fetchNewStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}newstories.json`);
  }

  fetchBestStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}beststories.json`);
  }
  //#endregion

  //#region Fetch Hn Item
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
