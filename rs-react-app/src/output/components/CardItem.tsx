import { Component } from 'react';
import type { Card } from '../types/card';

export class CardItem extends Component<Card> {
  constructor(props: Card) {
    super(props);
  }

  // static getDerivedStateFromProps(props: Card) {
  //   return {
  //     name: props.name,
  //     url: props.url,
  //   };
  // }
  // shouldComponentUpdate(nextProps: Card) {
  //   return this.props.name !== nextProps.name || this.props.url !== nextProps.url;
  // }

  render() {
    return (
      <li>
        <strong>{this.props.name}: </strong>
        {this.props.url}
      </li>
    );
  }
}
