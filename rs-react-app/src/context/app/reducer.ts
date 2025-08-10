import type { Action } from '../../types/app/action';
import type { AppState } from '../../types/app/appState';

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
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
