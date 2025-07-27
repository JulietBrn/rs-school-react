import { type MouseEvent } from 'react';
import { useAppContext } from '../../context/app/useAppContext';
import { useLocalStorage } from '../../utils/useLocalStorage';

function TopControls() {
  const { updateInput, state, fetchData } = useAppContext();
  const { setValue, removeValue } = useLocalStorage(
    'inputValue',
    state.inputValue
  );

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    fetchData(state.inputValue || '');

    if (state.inputValue === '') {
      removeValue('inputValue');
    } else if (state.inputValue) {
      setValue(state.inputValue);
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
        <button
          onClick={(e) => handleClick(e)}
          className="py-2 px-4 bg-indigo-700 text-amber-100 sm:max-w-40 cursor-pointer hover:bg-indigo-800 transition-colors duration-300"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export { TopControls };
