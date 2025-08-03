import { useDispatch, useSelector } from 'react-redux';
import { useDetailsContext } from '../../context/details/useDetailsContext';
import type { Card } from '../../types/card';
import { toggleSelect } from '../../store/itemsSlice';
import type { RootState } from '../../store/store';

export function CardItem(card: Card) {
  const { fetchDetailsCard, showDetails } = useDetailsContext();
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.items.selectedItems
  );

  const isItemSelected = selectedItems.length
    ? selectedItems.some((item) => item.name === card.name)
    : false;

  function handleItemClick() {
    showDetails();
    fetchDetailsCard(card.url);
  }

  return (
    <li
      onClick={handleItemClick}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 cursor-pointer "
    >
      <input
        onClick={() => dispatch(toggleSelect(card))}
        className="mr-2"
        type="checkbox"
        checked={isItemSelected}
      />
      <strong className="dark:text-white">{card.name}: </strong>
      {card?.url || `Description for ${card.name} not available`}
    </li>
  );
}
