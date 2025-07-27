import { type MouseEvent } from 'react';

type TopControlsProps = {
  inputValue?: string;
  updateInput: (value: string) => void;
  fetchData: (query: string) => void;
};

function TopControls(props: TopControlsProps) {
  const { updateInput, inputValue, fetchData } = props;

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    fetchData(inputValue || '');
    if (inputValue) {
      localStorage.setItem('inputValue', inputValue);
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
            value={inputValue || ''}
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
