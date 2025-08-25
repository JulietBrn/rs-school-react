import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Form } from "../components/types";

const initialState: FormSliceState = {
  formsData: [],
};

export type FormSliceState = {
  formsData: Form[];
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData: (state, action: PayloadAction<Form>) => {
      state.formsData.push(action.payload);
    },
  },
});

export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
