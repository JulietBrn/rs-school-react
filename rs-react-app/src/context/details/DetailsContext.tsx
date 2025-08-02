import { createContext, useReducer } from 'react';
import type { Card } from '../../types/card';

const initialState: DetailsContextType = {
  isDetailsShown: false,
  selectedCard: null,
  currentId: null,
  showDetails: () => {},
  hideDetails: () => {},
  fetchDetailsCard: () => Promise.resolve(),
  error: null,
  isLoading: false,
};

type DetailsContextType = {
  isDetailsShown: boolean;
  selectedCard: Card | null;
  currentId: string | null;
  showDetails: () => void;
  hideDetails: () => void;
  fetchDetailsCard: (url: string) => Promise<void>;
  error: string | null;
  isLoading: boolean;
};

const DetailsContext = createContext<DetailsContextType | undefined>(undefined);

type DetailsState = {
  isLoading: boolean;
  error: string | null;
  selectedCard: Card | null;
  isDetailsShown: boolean;
  currentId: string | null;
};

type DetailsAction =
  | { type: 'FETCH_DETAILS_START' }
  | { type: 'FETCH_DETAILS_SUCCESS'; payload: Card }
  | { type: 'FETCH_DETAILS_ERROR'; payload: string }
  | { type: 'HIDE_DETAILS' }
  | { type: 'SHOW_DETAILS' };

function detailsReducer(
  state: DetailsState,
  action: DetailsAction
): DetailsState {
  switch (action.type) {
    case 'FETCH_DETAILS_START':
      return { ...state, isLoading: true, error: null, selectedCard: null };
    case 'FETCH_DETAILS_SUCCESS':
      return {
        ...state,
        selectedCard: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_DETAILS_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'HIDE_DETAILS':
      return { ...state, isDetailsShown: false, selectedCard: null };
    case 'SHOW_DETAILS':
      return { ...state, isDetailsShown: true };
    default:
      return state;
  }
}

const DetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(detailsReducer, initialState);

  function showDetails() {
    dispatch({ type: 'SHOW_DETAILS' });
  }
  function hideDetails() {
    dispatch({ type: 'HIDE_DETAILS' });
  }

  async function fetchDetailsCard(url: string) {
    dispatch({ type: 'FETCH_DETAILS_START' });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch card details');
      }
      const data: Card = await response.json();
      dispatch({ type: 'FETCH_DETAILS_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching card details:', error);
      dispatch({
        type: 'FETCH_DETAILS_ERROR',
        payload: 'Failed to fetch data',
      });
    }
  }

  return (
    <DetailsContext.Provider
      value={{
        isDetailsShown: state.isDetailsShown,
        selectedCard: state.selectedCard,
        showDetails,
        hideDetails,
        fetchDetailsCard,
        error: state.error,
        isLoading: state.isLoading,
        currentId: state.currentId,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };
