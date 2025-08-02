import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Results } from './components/search/Results';
import { TopControls } from './components/search/SearchBlock';
import { DetailsProvider } from './context/details/DetailsContext';
import { useLocalStorage } from './utils/useLocalStorage';
import { useAppContext } from './context/app/useAppContext';

function App() {
  const { state, updateInput, fetchData } = useAppContext();
  const [, setSearchParams] = useSearchParams();
  const { storedValue } = useLocalStorage('inputValue');

  useEffect(() => {
    updateInput(storedValue);
    setSearchParams({ page: String(state.currentPage) });
    fetchData({ page: state.currentPage });
  }, [state.currentPage]);

  return (
    <>
      <TopControls />
      <DetailsProvider>
        <Results
          data={state.data}
          isLoading={state.isLoading}
          error={state.error}
        />
      </DetailsProvider>
    </>
  );
}

export default App;
