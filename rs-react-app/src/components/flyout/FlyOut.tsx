import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/Button';
import { unselectAll } from '../../store/itemsSlice';
import type { RootState } from '../../store/store';
import { downloadCSV } from '../../utils/downloadCSV';

export default function FlyOut() {
  const dispatch = useDispatch();
  const itemsLength = useSelector(
    (state: RootState) => state.items.selectedItemsLength
  );
  const items = useSelector((state: RootState) => state.items.selectedItems);

  const defaultClasses =
    'fixed bg-gray-100 dark:bg-gray-800 shadow-lg p-4 bottom-0 right-0 opacity-0 transition-opacity duration-300 z-50 flex flex-col sm:flex-row gap-2 justify-between w-full invisible';

  const visibilityClasses = 'opacity-100 visible ';

  const className = !itemsLength
    ? defaultClasses
    : defaultClasses + ' ' + visibilityClasses;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const simplifiedItems = items.map(({ name, url }) => ({
      name,
      url,
    }));

    downloadCSV(simplifiedItems, `${itemsLength}_items.csv`);
  }

  return (
    <div id="flyout" className={className}>
      <Button onClick={() => dispatch(unselectAll())}>Unselect All</Button>
      <div>{itemsLength} items are selected</div>

      <Button onClick={(e) => handleClick(e)}>Download</Button>
    </div>
  );
}
