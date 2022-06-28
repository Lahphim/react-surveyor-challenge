import { createSlice } from '@reduxjs/toolkit';

import { formLoginReducers, extraReducers } from './actions';

export interface FormLoginState {
  status: 'idle' | 'submitting' | 'succeeded' | 'failed';
  errorList: string[];
}

export const initialState: FormLoginState = {
  status: 'idle',
  errorList: [],
};

export const formLoginSlice = createSlice({
  name: 'formLogin',
  initialState,
  reducers: formLoginReducers,
  extraReducers: extraReducers,
});

export const formLoginActions = formLoginSlice.actions;

export default formLoginSlice.reducer;
