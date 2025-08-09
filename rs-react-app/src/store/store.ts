import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import { api } from '../services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    items: itemsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
