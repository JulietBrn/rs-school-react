import { Component } from 'react';
import { CardItem } from './CardItem';

class Results extends Component {
  render() {
    return (
      <section>
        <h2>Results</h2>
        <div className="wrapper">
          <ul>
            <CardItem name="Name" url="Description" />
            <CardItem name="Card 1" url="https://example.com/card1" />
            <CardItem name="Card 2" url="https://example.com/card2" />
            <CardItem name="Card 3" url="https://example.com/card3" />
          </ul>
        </div>
      </section>
    );
  }
}

export { Results };
