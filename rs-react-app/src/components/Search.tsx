import { useSearchContext } from '@context/useContext';
import { useCallback } from 'react';

export default function Search() {
  const { inputValue, setInputValue, onSubmit } = useSearchContext();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
    [setInputValue]
  );

  return (
    <div className="mb-4">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="border border-gray-300 rounded-md p-2"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="border cursor-pointer border-gray-300 rounded-md p-2 ml-2 bg-blue-100 hover:bg-blue-200">
          Search
        </button>
      </form>
    </div>
  );
}
