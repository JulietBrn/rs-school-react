// import { Component } from 'react';
import { CardItem } from '../card/CardItem';
import type { Card, ResultsProps } from '../../types/card';

function Results(props: ResultsProps) {
  const { data, isLoading, error } = props;

  return (
    <div className="min-h-100">
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
              return <CardItem key={index} name={card.name} url={card.url} />;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export { Results };
