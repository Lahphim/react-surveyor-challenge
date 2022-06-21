import { createSlice } from '@reduxjs/toolkit';

export interface SampleState {
  value: number;
}

export const initialState: SampleState = {
  value: 0,
};

export const sampleSlice = createSlice({
  name: 'sampleThing',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const sampleActions = sampleSlice.actions;

export default sampleSlice.reducer;
