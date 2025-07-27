import { useAppContext } from '../../context/app/useAppContext';
import { useDetailsContext } from '../../context/details/useDetailsContext';

export default function CardItemDetails() {
  const { hideDetails, selectedCard } = useDetailsContext();
  const { state } = useAppContext();

  return (
    <section>
      <h2>Details</h2>
      <button
        title="Close details"
        className="bg-pink-300 py-1 px-2 cursor-pointer"
        onClick={() => hideDetails()}
      >
        X
      </button>

      {state.isLoading && <p>Loading...</p>}
      <div>
        <strong>Pokemon:</strong> {selectedCard?.name}
      </div>
      <div>
        <div>
          <strong>Pokemon Abilities:</strong>
        </div>
        {selectedCard?.abilities?.map((ability, index) => (
          <div key={index}>
            → <strong>{ability.ability.name}</strong>: {ability.ability.url}
          </div>
        ))}
      </div>
    </section>
  );
}
