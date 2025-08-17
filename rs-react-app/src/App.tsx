import { useEffect } from 'react';
import { Results } from './components/search/Results';
import { TopControls } from './components/search/SearchBlock';
import { DetailsProvider } from './context/details/DetailsContext';
import FlyOut from './components/flyout/FlyOut';
import { useAppContext } from './context/app/useAppContext';
import { useSearchParams, useRouter } from 'next/navigation';

function App() {
  const { state } = useAppContext();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // setSearchParams({ page: String(state.currentPage) });

    const params = new URLSearchParams(searchParams?.toString());
    params.set('page', String(state.currentPage));
    router.replace(`?${params.toString()}`);
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
