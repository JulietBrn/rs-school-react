import { useDetailsContext } from '../../context/details/useDetailsContext';
import type { Card } from '../../types/card';

export function CardItem(card: Card) {
  const { fetchDetailsCard, showDetails } = useDetailsContext();

  function handleItemClick() {
    showDetails();
    fetchDetailsCard(card.url);
  }

  return (
    <li
      onClick={handleItemClick}
      className="hover:bg-gray-100 p-2 cursor-pointer"
    >
      <strong>{card.name}: </strong>
      {card?.url || `Description for ${card.name} not available`}
    </li>
  );
}
