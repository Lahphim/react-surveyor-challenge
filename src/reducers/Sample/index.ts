import { createSlice } from '@reduxjs/toolkit';

export interface SampleState {
  value: number;
}

export const initialState: SampleState = {
  value: 0,
};

export const sampleReducers = {
  increment: (state: SampleState) => {
    state.value += 1;
  },
};

export const sampleSlice = createSlice({
  name: 'sampleThing',
  initialState,
  reducers: sampleReducers,
});

export const sampleActions = sampleSlice.actions;

export default sampleSlice.reducer;
