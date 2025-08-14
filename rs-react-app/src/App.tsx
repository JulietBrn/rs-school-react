import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Results } from './components/search/Results';
import { TopControls } from './components/search/SearchBlock';
import { DetailsProvider } from './context/details/DetailsContext';
import FlyOut from './components/flyout/FlyOut';
import { useAppContext } from './context/app/useAppContext';

function App() {
  const { state } = useAppContext();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
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
