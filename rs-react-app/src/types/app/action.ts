import type { Card } from '../card';

export type Action =
  | { type: 'UPDATE_INPUT'; payload: string }
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Array<Card> }
  | { type: 'FETCH_ERROR'; payload: string };
