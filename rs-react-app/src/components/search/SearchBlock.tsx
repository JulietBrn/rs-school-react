import { type MouseEvent } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { Button } from '../Button';
import { useAppContext } from '../../context/app/useAppContext';

function TopControls() {
  const { updateInput, state, fetchDataByName, fetchData } = useAppContext();
  const { setValue, removeValue } = useLocalStorage(
    'inputValue',
    state.inputValue
  );

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (state.inputValue === '') {
      removeValue('inputValue');
      fetchData({ page: state.currentPage });
    } else if (state.inputValue) {
      setValue(state.inputValue);
      fetchDataByName(state.inputValue);
    }
  }

  return (
    <section>
      <h2>Find a pokemon!</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <label htmlFor="search">
          <input
            id="search"
            placeholder="Enter pokemon name"
            type="text"
            value={state.inputValue || ''}
            onChange={(e) => updateInput(e.target.value.trim())}
            className="border-2 border-indigo-600 py-1 px-4 min-h-11 w-full"
          />
        </label>
        <Button onClick={(e) => handleClick(e)}>Search</Button>
      </form>
    </section>
  );
}

export { TopControls };
