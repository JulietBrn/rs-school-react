import { useEffect } from 'react';
import { Results } from './components/search/Results';
import { TopControls } from './components/search/SearchBlock';
import { useAppContext } from './context/app/useAppContext';
import { DetailsProvider } from './context/details/DetailsContext';
import { useLocalStorage } from './utils/useLocalStorage';

function App() {
  const { state, updateInput, fetchData } = useAppContext();

  const { storedValue } = useLocalStorage('inputValue');

  useEffect(() => {
    const initialValue = storedValue || '';

    updateInput(initialValue);
    fetchData(initialValue);
  }, [fetchData, storedValue]);

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
