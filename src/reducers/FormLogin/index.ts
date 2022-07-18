import { createSlice } from '@reduxjs/toolkit';

import { FormState } from '@/types/form';

import { formLoginReducers, extraReducers } from './actions';

export const initialState: FormState = {
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
