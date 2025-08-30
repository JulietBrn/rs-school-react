import React from 'react';
import { NONE_VALUE } from './constants';
import type { CountryData } from './types';

export default function TableRow({
  country,
  countryNames,
  index,
}: {
  country: CountryData;
  countryNames: string[];
  index: number;
}) {
  const lastDataPoint = country.data[country.data.length - 1];
  const { year, population, co2, co2_per_capita } = lastDataPoint || {};

  return (
    <tr key={country.iso_code}>
      <td>{countryNames[index]}</td>
      <td className={!year ? 'text-red-500' : ''}>{year || NONE_VALUE}</td>
      <td className={!population ? 'text-red-500' : ''}>
        {population || NONE_VALUE}
      </td>
      <td className={!co2 ? 'text-red-500' : ''}>{co2 || NONE_VALUE}</td>
      <td className={!co2_per_capita ? 'text-red-500' : ''}>
        {co2_per_capita || NONE_VALUE}
      </td>
    </tr>
  );
}
