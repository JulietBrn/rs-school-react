import type { Action } from './types/action';
import type { AppState } from './types/appState';

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, inputValue: action.payload };
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null, data: [] };
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, isLoading: false };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, isLoading: false, data: [] };
    default:
      return state;
  }
}
