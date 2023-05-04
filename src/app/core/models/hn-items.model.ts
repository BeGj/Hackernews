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
  prarent: number;
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
