import React, { use } from 'react';
import TableRow from './TableRow';
import { URL } from './constants';
import type { CountriesResponse } from './types';

const countriesPromise = fetch(URL).then((res) => res.json());

function getCountries(): Promise<CountriesResponse> {
  return countriesPromise;
}

function Table() {
  const data = use(getCountries());
  const countries = Object.values(data);
  const countryNames = Object.keys(data);

  return (
    <div className="overflow-auto">
      <table className="min-w-lg">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Population</th>
            <th>CO2</th>
            <th>CO2 per Capita</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <TableRow
              key={country.iso_code}
              country={country}
              countryNames={countryNames}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
