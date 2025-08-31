import { useSearchContext } from '@context/useContext';

export default function Search() {
  const { inputValue, setInputValue, onSubmit } = useSearchContext();

  return (
    <div className="mb-4">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="border border-gray-300 rounded-md p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="border cursor-pointer border-gray-300 rounded-md p-2 ml-2 bg-blue-100 hover:bg-blue-200">
          Search
        </button>
      </form>
    </div>
  );
}
