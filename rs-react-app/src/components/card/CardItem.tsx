import { useDispatch, useSelector } from 'react-redux';
import type { Card } from '../../types/card';
import { toggleSelect } from '../../store/itemsSlice';
import type { RootState } from '../../store/store';
import { useDetailsContext } from '../../context/details/useDetailsContext';

export function CardItem(card: Card) {
  const { showDetails } = useDetailsContext();
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.items.selectedItems
  );

  const isItemSelected = selectedItems.length
    ? selectedItems.some((item) => item.name === card.name)
    : false;

  function handleItemClick() {
    showDetails(card.name);
  }

  return (
    <li
      onClick={handleItemClick}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 cursor-pointer "
    >
      <input
        onChange={(e) => {
          e.stopPropagation();
          dispatch(toggleSelect(card));
        }}
        className="mr-2"
        type="checkbox"
        checked={isItemSelected}
      />
      <strong className="dark:text-white">{card.name}: </strong>
      {card?.url || `Description for ${card.name} not available`}
    </li>
  );
}
