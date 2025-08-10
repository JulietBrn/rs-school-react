import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../context/app/constants';
import type { Card } from '../types/card';

export const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Items', 'ItemDetails'],
  endpoints: (build) => ({
    getItems: build.query<
      {
        results: Card[];
        count: number;
        previous: string | null;
        next: string | null;
      },
      number
    >({
      query: (page) => `?offset=${(page - 1) * 20}&limit=20`,
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ name }) => ({
                type: 'Items' as const,
                id: name,
              })),
              { type: 'Items', id: 'LIST' },
            ]
          : [{ type: 'Items', id: 'LIST' }],
    }),

    getItemByName: build.query<Card, string>({
      query: (name) => `${name.toLowerCase()}`,
      providesTags: (_result, _error, name) => [
        { type: 'ItemDetails', id: name },
      ],
    }),

    getItemByUrl: build.query<Card, string>({
      query: (url) => url,
    }),
  }),
});

export const { useGetItemsQuery, useGetItemByNameQuery, useGetItemByUrlQuery } =
  api;
