import { use, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { CountriesResponse, sortOrder } from '@interfaces/types';
import { URL_COUNTRIES } from '@constants/url';
import TableRow from '@components/TableRow';
import { setCountries, setCountryNames, sortByName } from '@store/dataSlice';
import { type RootState } from '@store/store';

const countriesPromise = fetch(URL_COUNTRIES).then((res) => res.json());

function getCountries(): Promise<CountriesResponse> {
  return countriesPromise;
}

function Table() {
  const dispatch = useDispatch();
  const [nameSortValue, setNameSortValue] = useState<sortOrder | null>(null);

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

  const handleClick = useCallback(() => {
    setNameSortValue((nameSortValue) =>
      nameSortValue === 'asc' ? 'desc' : 'asc'
    );
    dispatch(sortByName(nameSortValue));
  }, [nameSortValue]);

  const rows = useMemo(
    () =>
      countryNames.map((countryName) => (
        <TableRow
          key={countryName}
          countryName={countryName}
          country={countries[countryName]}
        />
      )),
    [countryNames, countries]
  );

  return (
    <div className="overflow-auto">
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
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Table;
