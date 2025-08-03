import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Card } from '../types/card';
import type { itemsState } from '../types/app/itemsState';

const initialState: itemsState = {
  selectedItems: [],
  selectedItemsLength: 0,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    toggleSelect: (state, action: PayloadAction<Card>) => {
      const item = action.payload;

      const isItemSelected = state.selectedItems.length
        ? state.selectedItems.some((i) => i.name === item.name)
        : false;

      if (isItemSelected) {
        state.selectedItems = state.selectedItems.filter(
          (i) => i.name !== item.name
        );
      } else {
        state.selectedItems.push(item);
      }
      state.selectedItemsLength = state.selectedItems.length;
    },
    unselectAll: (state) => {
      state.selectedItems = [];
      state.selectedItemsLength = 0;
    },
  },
});

export const { toggleSelect, unselectAll } = itemsSlice.actions;
export default itemsSlice.reducer;
