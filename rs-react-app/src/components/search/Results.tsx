import { CardItem } from '../card/CardItem';
import type { Card, ResultsProps } from '../../types/card';
import CardItemDetails from '../card/CardItemDetails';
import { Button } from '../Button';
import { Loading } from '../LoadingElement';
import { ErrorElement } from '../ErrorElement';
import { useDetailsContext } from '../../context/details/useDetailsContext';
import { useAppContext } from '../../context/app/useAppContext';

function Results(props: ResultsProps) {
  const { data, isLoading, error } = props;
  const { isDetailsShown } = useDetailsContext();
  const { handleNextClick, handlePrevClick } = useAppContext();

  const isItemSingle = data.length === 1;

  return (
    <div className="min-h-90 grid grid-cols-2  gap-4">
      <section>
        <h2>Results</h2>
        <div className="wrapper">
          {isLoading && <Loading />}
          {error && <ErrorElement message={error} />}
          <ul className="grid xl:grid-cols-2">
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
        {!isItemSingle && (
          <div className="buttons-wrap">
            <Button onClick={handlePrevClick}>Prev</Button>
            <Button onClick={handleNextClick}>Next</Button>
          </div>
        )}
      </section>
      {isDetailsShown && <CardItemDetails />}
    </div>
  );
}

export { Results };
