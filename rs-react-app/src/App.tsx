import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Results } from './components/search/Results';
import { TopControls } from './components/search/SearchBlock';
import { DetailsProvider } from './context/details/DetailsContext';
import { useLocalStorage } from './utils/useLocalStorage';
import FlyOut from './components/flyout/FlyOut';
import { useAppContext } from './context/app/useAppContext';

function App() {
  const { state, updateInput } = useAppContext();
  const [, setSearchParams] = useSearchParams();

  const { storedValue } = useLocalStorage('inputValue');

  useEffect(() => {
    updateInput(storedValue);
    setSearchParams({ page: String(state.currentPage) });
  }, [state.currentPage]);

  return (
    <>
      <TopControls />
      <DetailsProvider>
        <Results />
        <FlyOut />
      </DetailsProvider>
    </>
  );
}

export default App;
