import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/Button';
import { unselectAll } from '../../store/itemsSlice';
import type { RootState } from '../../store/store';

export default function FlyOut() {
  const dispatch = useDispatch();
  const itemsLength = useSelector(
    (state: RootState) => state.items.selectedItemsLenght
  );

  const defaultClasses =
    'fixed bg-gray-100 dark:bg-gray-800 shadow-lg p-4 bottom-0 right-0 opacity-0 transition-opacity duration-300 z-50 flex flex-col md:flex-row gap-2 justify-between w-full invisible';

  const visibilityClasses = 'opacity-100 visible ';

  const className = !itemsLength
    ? defaultClasses
    : defaultClasses + ' ' + visibilityClasses;

  return (
    <div className={className}>
      <Button onClick={() => dispatch(unselectAll())}>Unselect All</Button>
      <div>{itemsLength} items are selected</div>
      <Button>Download</Button>
    </div>
  );
}
