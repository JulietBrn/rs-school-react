import { CardItem } from '../card/CardItem';
import type { Card, ResultsProps } from '../../types/card';
import CardItemDetails from '../card/CardItemDetails';
import { useDetailsContext } from '../../context/details/useDetailsContext';

function Results(props: ResultsProps) {
  const { data, isLoading, error } = props;
  const { isDetailsShown } = useDetailsContext();

  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="min-h-90 grid grid-cols-2  gap-4">
      <section>
        <h2>Results</h2>
        <div className="wrapper">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul>
            {!isLoading && !error && (
              <p>
                <strong>Pokemon name</strong> Description
              </p>
            )}
            {data.map((card: Card, index: number) => {
              return (
                <CardItem
                  key={index}
                  name={card.name}
                  url={card.url}
                  abilities={card.abilities}
                />
              );
            })}
          </ul>
        </div>
      </section>
      {isDetailsShown && <CardItemDetails />}
    </div>
  );
}

export { Results };
