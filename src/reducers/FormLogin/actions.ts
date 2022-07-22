/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';

import authenticationAdapter from '@/adapters/Authentication';
import { setUserToken } from '@/helpers/Authentication';
import { getErrorList } from '@/helpers/Payload';
import { ApiErrorList } from '@/types/error';
import { FormState, Login } from '@/types/form';
import { LoginResponse } from '@/types/Response/login';

export const loginUserAsync = async (
  payload: Login,
  thunkApi: { rejectWithValue: (data: any) => any }
) => {
  const { email, password } = payload;

  return authenticationAdapter
    .login(email, password)
    .then((response) => {
      const loginResponse = response.data as LoginResponse;

      setUserToken({
        accessToken: loginResponse.attributes.accessToken,
        refreshToken: loginResponse.attributes.refreshToken,
      });

      Router.push('/');
    })
    .catch((error) => {
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
      state.status = 'failed';
      state.errorList = getErrorList(payload as ApiErrorList);
    });
};

export const formLoginReducers = {
  reset: (state: FormState) => {
    state.status = 'idle';
    state.errorList = [];
  },
};
