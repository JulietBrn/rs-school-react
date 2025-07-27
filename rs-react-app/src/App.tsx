import { useCallback, useEffect, useReducer } from 'react';
import { Results } from './output/components/Results';
import { TopControls } from './searchBlock/components/SearchBlock';
import type { AppState } from './types/appState';
import { reducer } from './reducer';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  const initialState: AppState = {
    inputValue: '',
    data: [],
    error: null,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function updateInput(value: string) {
    dispatch({ type: 'UPDATE_INPUT', payload: value });
  }

  function getUrl(inputValue: string) {
    if (inputValue.trim() === '') {
      return BASE_URL;
    } else {
      return `${BASE_URL}${inputValue}/`;
    }
  }

  const fetchData = useCallback(async function fetchData(inputValue: string) {
    dispatch({ type: 'FETCH_START' });
    const URL = getUrl(inputValue);

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error('Something went wrong');

      const data = await response.json();

      dispatch({ type: 'FETCH_SUCCESS', payload: data?.results || [data] });
    } catch {
      console.log('Some error occur');
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch data' });
    }
  }, []);

  useEffect(() => {
    const savedValue = localStorage.getItem('inputValue');
    const initialValue = savedValue || '';

    updateInput(initialValue);
    fetchData(initialValue);
  }, [fetchData]);

  return (
    <main className="prose">
      <TopControls
        inputValue={state.inputValue}
        updateInput={updateInput}
        fetchData={fetchData}
      />
      <Results
        data={state.data}
        isLoading={state.isLoading}
        error={state.error}
      />
    </main>
  );
}

export default App;
