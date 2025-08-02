import { createContext, useCallback, useReducer } from 'react';
import type { AppState } from '../../types/app/appState';
import { reducer } from '../../reducer';
import { useLocalStorage } from '../../utils/useLocalStorage';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getInitialPage = () => {
  const fromStorage = localStorage.getItem('page');
  return fromStorage ? Number(fromStorage) : 1;
};

const initialState: AppState = {
  inputValue: '',
  data: [],
  prevLink: null,
  nextLink: null,
  currentPage: getInitialPage(),
  countPerPage: 20,
  count: 0,
  error: null,
  isLoading: false,
};

interface AppContextProps {
  state: AppState;
  updateInput: (value: string) => void;
  fetchData: (params: Params) => void;
  fetchDataByName: (name: string) => void;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  setPage: (page: number) => void;
}

type Params = {
  page: number;
  id?: string;
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setValue } = useLocalStorage('page', `${state.currentPage}`);

  function getUrl(params: Params) {
    console.log('Current page:', params.page);
    return `${BASE_URL}?offset=${(params.page - 1) * 20}&limit=20`;
  }

  function updateInput(value: string) {
    dispatch({ type: 'UPDATE_INPUT', payload: value });
  }

  function setLinks(prevLink: string | null, nextLink: string | null) {
    dispatch({ type: 'SET_LINKS', payload: { prevLink, nextLink } });
  }

  function setPage(page: number) {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    setValue(String(page));
  }

  function handleNextClick() {
    if (state.count / state.countPerPage > state.currentPage) {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: state.currentPage + 1 });
      setValue(String(state.currentPage + 1));
    }
  }
  function handlePrevClick() {
    if (state.currentPage > 1) {
      dispatch({ type: 'SET_CURRENT_PAGE', payload: state.currentPage - 1 });
      setValue(String(state.currentPage - 1));
    }
  }

  function setCount(count: number) {
    dispatch({ type: 'SET_COUNT', payload: count });
  }

  const fetchData = useCallback(async function fetchData(params: Params) {
    dispatch({ type: 'FETCH_START' });
    const URL = getUrl(params);

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Something went wrong');

      const data = await response.json();

      dispatch({ type: 'FETCH_SUCCESS', payload: data.results });
      setLinks(data.previous, data.next);
      setCount(data.count || 0);
      console.log('Data fetched successfully:', data);
    } catch {
      console.log('Some error occur');
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch data' });
    }
  }, []);

  const fetchDataByName = useCallback(async function fetchDataByName(
    name: string
  ) {
    dispatch({ type: 'FETCH_START' });
    const URL = `${BASE_URL}${name.toLowerCase()}`;

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Something went wrong');

      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: [data] });
      setLinks(null, null);
      setCount(1);
      console.log('Data fetched successfully:', data);
    } catch {
      console.log('Some error occur');
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch data' });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        updateInput,
        fetchData,
        handleNextClick,
        handlePrevClick,
        fetchDataByName,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
