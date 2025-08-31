import { use, useEffect, useState } from 'react';
import TableRow from './TableRow';
import { URL } from './constants';
import type { CountriesResponse } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries, setCountryNames, sortByName } from '../store/dataSlice';
import { type RootState } from '../store/store';
import Filter from './Filter';
import Search from './Search';

const countriesPromise = fetch(URL).then((res) => res.json());

function getCountries(): Promise<CountriesResponse> {
  return countriesPromise;
}

function Table() {
  const dispatch = useDispatch();
  const [nameSortValue, setNameSortValue] = useState<'asc' | 'desc' | null>(
    null
  );

  const data = use(getCountries());
  dispatch(setCountries(data));

  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );
  const countryNames = useSelector(
    (state: RootState) => state.countries.countryNames
  );

  useEffect(() => {
    dispatch(setCountryNames(Object.keys(data)));
  }, []);

  function handleClick() {
    setNameSortValue(nameSortValue === 'asc' ? 'desc' : 'asc');
    dispatch(sortByName(nameSortValue));
  }

  return (
    <div className="overflow-auto">
      <Search />
      <Filter />

      <table className="min-w-lg">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            <th
              className="button cursor-pointer hover:bg-amber-100"
              onClick={handleClick}
            >
              Name
              {nameSortValue === 'asc' ? ' ▲' : ' ▼'}
            </th>
            <th>Year</th>
            <th>Population</th>
            <th>CO2</th>
            <th>CO2 per Capita</th>
          </tr>
        </thead>
        <tbody>
          {countryNames.map((countryName) => (
            <TableRow
              key={countryName}
              countryName={countryName}
              country={countries[countryName]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
