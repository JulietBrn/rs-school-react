import { useDetailsContext } from '../../context/details/useDetailsContext';
import { useGetItemByNameQuery } from '../../services/api';
import { ErrorElement } from '../helpers/ErrorElement';
import { Loading } from '../helpers/LoadingElement';

export default function CardItemDetails() {
  const { hideDetails, currentName } = useDetailsContext();
  const { data, error, isLoading } = useGetItemByNameQuery(currentName);

  return (
    <section>
      <div className="sticky top-6">
        <h2 className="dark:text-white">Details</h2>
        <div className="wrapper">
          {isLoading && <Loading />}
          {error && <ErrorElement error={error} />}
        </div>

        {data && (
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
              <strong className="dark:text-white">Pokemon:</strong> {data?.name}
            </div>
            <div>
              <div>
                <strong className="dark:text-white">Pokemon Abilities:</strong>
              </div>
              {data?.abilities?.map((ability, index) => (
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
