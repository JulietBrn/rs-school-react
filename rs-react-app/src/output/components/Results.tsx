import { Component } from 'react';
import { CardItem } from './CardItem';
import type { Card, ResultsProps } from '../../types/card';

class Results extends Component<ResultsProps> {
  render() {
    return (
      <section className="min-h-100">
        <h2>Results</h2>
        <div className="wrapper">
          {this.props.isLoading && <p>Loading...</p>}
          {this.props.error && <p>Error: {this.props.error}</p>}
          <ul>
            {!this.props.isLoading && !this.props.error && (
              <p>
                <strong>Pokemon name</strong> Description
              </p>
            )}
            {this.props.data.map((card: Card, index: number) => {
              return <CardItem key={index} name={card.name} url={card.url} />;
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export { Results };
