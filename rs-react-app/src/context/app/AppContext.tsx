import { createContext, useCallback, useReducer } from 'react';
import type { AppState } from '../../types/app/appState';
import { reducer } from '../../reducer';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const initialState: AppState = {
  inputValue: '',
  data: [],
  error: null,
  isLoading: false,
};

interface AppContextProps {
  state: AppState;
  updateInput: (value: string) => void;
  fetchData: (inputValue: string) => void;
}

function getUrl(inputValue: string) {
  if (inputValue.trim() === '') {
    return BASE_URL;
  } else {
    return `${BASE_URL}${inputValue}/`;
  }
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateInput(value: string) {
    dispatch({ type: 'UPDATE_INPUT', payload: value });
  }

  const fetchData = useCallback(async function fetchData(inputValue: string) {
    dispatch({ type: 'FETCH_START' });
    const URL = getUrl(inputValue);

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Something went wrong');

      const data = await response.json();

      dispatch({ type: 'FETCH_SUCCESS', payload: data?.results || [data] });
      console.log('Data fetched successfully:', data);
    } catch {
      console.log('Some error occur');
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch data' });
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, updateInput, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
