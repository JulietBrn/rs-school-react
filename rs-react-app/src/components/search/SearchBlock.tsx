import { type MouseEvent } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { Button } from '../button/Button';
import { useAppContext } from '../../context/app/useAppContext';

function TopControls() {
  const { setSearchTerm } = useAppContext();

  const { storedValue, setValue, removeValue } = useLocalStorage(
    'inputValue',
    ''
  );

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (storedValue === '') {
      removeValue('inputValue');
      setSearchTerm('');
    } else if (storedValue) {
      setSearchTerm(storedValue);
    }
  }

  function updateInput(value: string) {
    setValue(value);

    if (value.trim() === '') {
      setSearchTerm('');
    }
  }

  return (
    <section>
      <h2 className="dark:text-white">Find a pokemon!</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <label htmlFor="search">
          <input
            id="search"
            placeholder="Enter pokemon name"
            type="text"
            value={storedValue}
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
