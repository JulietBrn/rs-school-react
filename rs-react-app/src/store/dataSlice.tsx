import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CountriesResponse, region } from '../compnents/types';
import { REGIONS } from '../compnents/constants';

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

    filterByRegion: (state, action: PayloadAction<region>) => {
      const region = action.payload;

      if (region !== 'All') {
        state.countryNames = [];
        REGIONS[region].forEach((countryItem) => {
          if (state.countries[countryItem]) {
            state.countryNames.push(countryItem);
          }
        });
      } else {
        state.countryNames = Object.keys(state.countries);
      }
    },

    searchByName: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.countryNames = Object.keys(state.countries).filter((countryName) =>
        countryName.toLowerCase().startsWith(searchTerm)
      );
    },
  },
});

export const {
  setCountries,
  setCountryNames,
  sortByName,
  filterByRegion,
  searchByName,
} = countriesSlice.actions;
export default countriesSlice.reducer;
