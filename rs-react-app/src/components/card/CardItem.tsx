import type { Card } from '../../types/card';

export function CardItem(card: Card) {
  return (
    <li className="hover:bg-gray-100 p-2 cursor-pointer">
      <strong>{card.name}: </strong>
      {card?.url || `Description for ${card.name} not available`}
    </li>
  );
}
