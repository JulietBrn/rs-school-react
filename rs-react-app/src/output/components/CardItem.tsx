import type { Card } from '../../types/card';

export function CardItem(card: Card) {
  return (
    <li>
      <strong>{card.name}: </strong>
      {card?.url || `Description for ${card.name} not available`}
    </li>
  );
}
