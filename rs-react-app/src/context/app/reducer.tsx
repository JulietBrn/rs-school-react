import type { Action } from './types/app/action';
import type { AppState } from './types/app/appState';

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return { ...state, inputValue: action.payload };
    case 'FETCH_START':
      return { ...state, isLoading: true, error: null, data: [] };
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, isLoading: false };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'SET_LINKS':
      return {
        ...state,
        prevLink: action.payload.prevLink,
        nextLink: action.payload.nextLink,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    default:
      return state;
  }
}
