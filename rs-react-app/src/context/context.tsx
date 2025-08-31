import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '@store/dataSlice';

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

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(searchByName(inputValue));
    },
    [dispatch, inputValue]
  );

  const clearInput = useCallback(() => {
    setInputValue('');
  }, []);

  const value = useMemo(
    () => ({
      inputValue,
      setInputValue,
      onSubmit,
      clearInput,
    }),
    [inputValue, onSubmit, clearInput]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
