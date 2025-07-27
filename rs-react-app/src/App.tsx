import { useEffect } from 'react';
import { Results } from './components/search/Results';
import { TopControls } from './components/search/SearchBlock';
import { useAppContext } from './context/app/useAppContext';
import { DetailsProvider } from './context/details/DetailsContext';

function App() {
  const { state, updateInput, fetchData } = useAppContext();

  useEffect(() => {
    const savedValue = localStorage.getItem('inputValue');
    const initialValue = savedValue || '';

    updateInput(initialValue);
    fetchData(initialValue);
  }, [fetchData]);

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
