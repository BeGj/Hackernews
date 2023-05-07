/**
 * A post with an url instead of text content
 */
export interface HnStory {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: HtmlString;
  type: 'story';
  url?: string;
}

/**
 * A comment that would be a child of a Post (Story/Ask)
 */
export interface HnComment {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: HtmlString;
  time: number;
  type: 'comment';
}
/**
 * A Post with text content instead on an url
 */
export interface HnAsk {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'story';
  url: undefined;
}

/**
 * Annoying job advertisements
 */
export interface HnJob {
  by: string;
  id: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'job';
  url: string;
  // kids and descendants??? doesnt seem like it..
}

export interface HnPoll {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  parts?: number[];
  score: number;
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

/**
 * User object.
 * About is html,
 * id is their username,
 * and submitted is a list of post ids they have submitted
 */
export interface HnUser {
  about: HtmlString;
  created: number;
  id: string;
  karma: number;
  submitted?: number[];
}

/**
 * Job ads and Posts (Story/Ask) with a saved boolean property
 */
export type HnPostJobWithSaved = HnPostJob & { saved: boolean };

/**
 * Posts (Story/Ask) with a saved boolean property
 */
export type HnPostWithSaved = HnPost & { saved: boolean };

/**
 * Post or a Job advertisement
 */
export type HnPostJob = HnPost | HnJob;

/**
 * String but it contains html, and should be shown with the innerHtml attribute on html elements
 */
export type HtmlString = string;

/**
 * A post is a Story or an Ask.
 * Difference is that is has either and url (post) or text (ask)
 */
export type HnPost = HnStory | HnAsk;
