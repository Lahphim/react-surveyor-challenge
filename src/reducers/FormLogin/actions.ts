import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import authenticationAdapter from '@/adapters/Authentication';
import { ApiError, ApiErrorList } from '@/types/error';
import { Login } from '@/types/form';

import { FormLoginState } from './index';

export const loginUserAsync = async (
  payload: Login,
  thunkApi: { rejectWithValue: (data: any) => any }
) => {
  const { email, password } = payload;

  return authenticationAdapter.login(email, password).catch((error) => {
    if (!error.response) {
      throw error;
    }

    return thunkApi.rejectWithValue(error.response.data);
  });
};

export const loginUser = createAsyncThunk('user/login', loginUserAsync);

export const extraReducers: (
  builder: ActionReducerMapBuilder<FormLoginState>
) => void = (builder) => {
  builder
    .addCase(loginUser.pending, (state, _action) => {
      state.status = 'submitting';
      state.errorList = [];
    })
    .addCase(loginUser.fulfilled, (state, _action) => {
      state.status = 'succeeded';
    })
    .addCase(loginUser.rejected, (state, { payload }) => {
      const { errors } = payload as ApiErrorList;
      const errorList = errors.map((item: ApiError, _index: number) => {
        return item.detail;
      });

      state.status = 'failed';
      state.errorList = errorList;
    });
};

export const formLoginReducers = {
  reset: (state: FormLoginState): void => {
    state.status = 'idle';
    state.errorList = [];
  },
};
