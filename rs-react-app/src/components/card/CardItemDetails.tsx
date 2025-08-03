import { useDetailsContext } from '../../context/details/useDetailsContext';
import { ErrorElement } from '../helpers/ErrorElement';
import { Loading } from '../helpers/LoadingElement';

export default function CardItemDetails() {
  const { hideDetails, selectedCard, isLoading, error } = useDetailsContext();

  return (
    <section>
      <div className="sticky top-6">
        <h2 className="dark:text-white">Details</h2>
        <div className="wrapper">
          {isLoading && <Loading />}
          {error && <ErrorElement message={error} />}
        </div>

        {selectedCard && (
          <div>
            {' '}
            <button
              title="Close details"
              className="bg-pink-300 dark:bg-pink-600  py-1 px-2 cursor-pointer"
              onClick={() => hideDetails()}
            >
              X
            </button>
            <div>
              <strong className="dark:text-white">Pokemon:</strong>{' '}
              {selectedCard?.name}
            </div>
            <div>
              <div>
                <strong className="dark:text-white">Pokemon Abilities:</strong>
              </div>
              {selectedCard?.abilities?.map((ability, index) => (
                <div key={index}>
                  →{' '}
                  <strong className="dark:text-white">
                    {ability.ability.name}
                  </strong>
                  : {ability.ability.url}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
