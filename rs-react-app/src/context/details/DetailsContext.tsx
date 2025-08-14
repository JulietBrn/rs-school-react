import { createContext, useReducer } from 'react';

const initialState: DetailsContextType = {
  isDetailsShown: false,
  currentName: '',
  showDetails: () => {},
  hideDetails: () => {},
};

type DetailsContextType = {
  isDetailsShown: boolean;
  currentName: string;
  showDetails: (name: string) => void;
  hideDetails: () => void;
};

const DetailsContext = createContext<DetailsContextType | undefined>(undefined);

type DetailsState = {
  isDetailsShown: boolean;
  currentName: string;
};

type DetailsAction =
  | { type: 'HIDE_DETAILS' }
  | { type: 'SHOW_DETAILS'; payload: string };

function detailsReducer(
  state: DetailsState,
  action: DetailsAction
): DetailsState {
  switch (action.type) {
    case 'HIDE_DETAILS':
      return { ...state, isDetailsShown: false };
    case 'SHOW_DETAILS':
      return { ...state, isDetailsShown: true, currentName: action.payload };
    default:
      return state;
  }
}

const DetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(detailsReducer, initialState);

  function showDetails(name: string) {
    dispatch({ type: 'SHOW_DETAILS', payload: name });
  }
  function hideDetails() {
    dispatch({ type: 'HIDE_DETAILS' });
  }

  return (
    <DetailsContext.Provider
      value={{
        isDetailsShown: state.isDetailsShown,
        showDetails,
        hideDetails,
        currentName: state.currentName,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };
