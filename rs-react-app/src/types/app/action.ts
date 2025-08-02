import type { Card } from '../card';

export type Action =
  | { type: 'UPDATE_INPUT'; payload: string }
  | { type: 'FETCH_START' }
  | { type: 'FETCH_DETAILS'; payload: string }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'FETCH_SUCCESS'; payload: Array<Card> }
  | {
      type: 'SET_LINKS';
      payload: { prevLink: string | null; nextLink: string | null };
    }
  | { type: 'SET_COUNT'; payload: number }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'FETCH_DETAILS_SUCCESS'; payload: Card };
