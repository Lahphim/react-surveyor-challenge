/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import authenticationAdapter from '@/adapters/Authentication';
import { ApiError, ApiErrorList } from '@/types/error';
import { FormState, Login } from '@/types/form';

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
  builder: ActionReducerMapBuilder<FormState>
) => void = (builder) => {
  builder
    .addCase(loginUser.pending, (state, _action) => {
      state.status = 'submitting';
    })
    .addCase(loginUser.fulfilled, (state, _action) => {
      state.status = 'succeeded';
    })
    .addCase(loginUser.rejected, (state, { payload }) => {
      if (payload) {
        const { errors } = payload as ApiErrorList;
        const errorList = errors.map((item: ApiError, _index: number) => {
          return item.detail;
        });

        state.errorList = errorList;
      }

      state.status = 'failed';
    });
};

export const formLoginReducers = {
  reset: (state: FormState): void => {
    state.status = 'idle';
    state.errorList = [];
  },
};
