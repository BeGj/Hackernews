import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HackernewsService {
  baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  constructor(private http: HttpClient) {}

  fetchTopStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}topstories.json`);
  }

  fetchNewStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}newstories.json`);
  }

  fetchBestStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}beststories.json`);
  }

  getStory(id: number): Observable<HnStory> {
    return this.http.get<HnStory>(`${this.baseUrl}item/${id}.json`);
  }

  getComment(id: number): Observable<HnComment> {
    return this.http.get<HnComment>(`${this.baseUrl}item/${id}.json`);
  }

  getAsk(id: number): Observable<HnAsk> {
    return this.http.get<HnAsk>(`${this.baseUrl}item/${id}.json`);
  }

  getPoll(id: number): Observable<HnPoll> {
    return this.http.get<HnPoll>(`${this.baseUrl}item/${id}.json`);
  }

  getPollOpt(id: number): Observable<HnPollOpt> {
    return this.http.get<HnPollOpt>(`${this.baseUrl}item/${id}.json`);
  }
}

export interface HnStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
}

export interface HnComment {
  by: string;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  type: 'comment';
}
export interface HnAsk {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'story';
}

export interface HnPoll {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  parts: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'poll';
}
export type HnPollOpt = HnPart;
interface HnPart {
  by: string;
  id: number;
  poll: number;
  score: number;
  text: string;
  time: number;
  type: 'pollopt';
}

export interface HnUser {
  id: string;
  created: number;
  karma: number;
  about: string;
  submitted: number[];
}
