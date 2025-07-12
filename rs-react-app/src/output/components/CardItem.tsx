import { Component } from 'react';
import type { Card } from '../../types/card';

export class CardItem extends Component<Card> {
  constructor(props: Card) {
    super(props);
  }

  render() {
    return (
      <li>
        <strong>{this.props.name}: </strong>
        {this.props?.url || `Description for ${this.props.name} not available`}
      </li>
    );
  }
}
