import React, { createContext, useState, type ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../store/dataSlice';

interface SearchContextProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
  clearInput: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(searchByName(inputValue));
  }

  function clearInput() {
    setInputValue('');
  }

  return (
    <SearchContext.Provider
      value={{ inputValue, setInputValue, onSubmit, clearInput }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
