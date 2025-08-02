import { useDetailsContext } from '../../context/details/useDetailsContext';
import { ErrorElement } from '../ErrorElement';
import { Loading } from '../LoadingElement';

export default function CardItemDetails() {
  const { hideDetails, selectedCard, isLoading, error } = useDetailsContext();

  return (
    <section>
      <div className="sticky top-6">
        <h2>Details</h2>
        <div className="wrapper">
          {isLoading && <Loading />}
          {error && <ErrorElement message={error} />}
        </div>

        {selectedCard && (
          <div>
            {' '}
            <button
              title="Close details"
              className="bg-pink-300 py-1 px-2 cursor-pointer"
              onClick={() => hideDetails()}
            >
              X
            </button>
            <div>
              <strong>Pokemon:</strong> {selectedCard?.name}
            </div>
            <div>
              <div>
                <strong>Pokemon Abilities:</strong>
              </div>
              {selectedCard?.abilities?.map((ability, index) => (
                <div key={index}>
                  → <strong>{ability.ability.name}</strong>:{' '}
                  {ability.ability.url}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
