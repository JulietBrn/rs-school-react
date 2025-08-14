'use client';

import { createContext, useReducer, useState } from 'react';
import type { AppState } from '../../types/app/appState';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { COUNT_PER_PAGE } from './constants';
import { reducer } from './reducer';

const getInitialPage = () => {
  const fromStorage = localStorage.getItem('page');
  return fromStorage ? Number(fromStorage) : 1;
};

const initialState: AppState = {
  prevLink: null,
  nextLink: null,
  currentPage: getInitialPage(),
  countPerPage: COUNT_PER_PAGE,
  count: 0,
};

interface AppContextProps {
  state: AppState;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  setPage: (page: number) => void;
  setLinks: (prevLink: string | null, nextLink: string | null) => void;
  setCount: (count: number) => void;
  setSearchTerm: (term: string) => void;
  searchTerm: string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const { setValue } = useLocalStorage('page', `${state.currentPage}`);

  function setLinks(prevLink: string | null, nextLink: string | null) {
    dispatch({ type: 'SET_LINKS', payload: { prevLink, nextLink } });
  }

  function setPage(page: number) {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
    setValue(String(page));
  }

  function handleNextClick() {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: state.currentPage + 1 });
    setValue(String(state.currentPage + 1));
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

  return (
    <AppContext.Provider
      value={{
        state,
        handleNextClick,
        handlePrevClick,
        setPage,
        setLinks,
        setCount,
        setSearchTerm,
        searchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
