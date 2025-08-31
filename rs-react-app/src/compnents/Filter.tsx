import type { region } from './types';
import { useDispatch } from 'react-redux';
import { filterByRegion } from '../store/dataSlice';
import { REGIONS } from './constants';
import { useSearchContext } from '../context/useContext';

export default function Filter() {
  const dispatch = useDispatch();
  const { clearInput } = useSearchContext();

  function setSelectedRegion(region: region) {
    dispatch(filterByRegion(region));
    clearInput();
  }

  return (
    <select
      onChange={(e) => setSelectedRegion(e.target.value as region)}
      name="regions"
      id="regions"
      className="border border-gray-300 rounded-md p-2 mb-4"
    >
      {Object.keys(REGIONS).map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
