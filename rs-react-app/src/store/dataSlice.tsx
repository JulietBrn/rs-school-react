import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CountriesResponse } from '../compnents/types';

const initialState: CountriesSliceState = {
  countries: {},
  countryNames: [],
};

export type CountriesSliceState = {
  countries: CountriesResponse;
  countryNames: string[];
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<CountriesResponse>) => {
      state.countries = action.payload;
    },
    setCountryNames: (state, action: PayloadAction<string[]>) => {
      state.countryNames = action.payload;
    },
    sortByName: (state, action: PayloadAction<'asc' | 'desc' | null>) => {
      state.countryNames.sort((a, b) => {
        if (action.payload === 'asc') {
          return a.localeCompare(b);
        } else {
          return b.localeCompare(a);
        }
      });
    },
  },
});

export const { setCountries, setCountryNames, sortByName } =
  countriesSlice.actions;
export default countriesSlice.reducer;
