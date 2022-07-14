import { faker } from '@faker-js/faker';
import { AxiosResponse } from 'axios';

import authenticationAdapter from '@/adapters/Authentication';
import { FormState, Login } from '@/types/form';

import { formLoginReducers, loginUser, loginUserAsync } from './actions';
import reducer, { initialState } from './index';

jest.mock('@/adapters/Authentication');

describe('form login reducers', () => {
  describe('reset', () => {
    it('resets the status to idle', () => {
      const mockState: FormState = {
        ...initialState,

        status: 'failed',
      };

      formLoginReducers.reset(mockState);

      expect(mockState.status).toBe('idle');
    });

    it('resets the error message list to an empty list', () => {
      const mockState: FormState = {
        ...initialState,

        errorList: [faker.lorem.text(), faker.lorem.text()],
      };

      formLoginReducers.reset(mockState);

      expect(mockState.errorList).toHaveLength(0);
    });
  });

  describe('loginUser', () => {
    const mockLoginUser = jest.fn();
    const payload: Login = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    beforeEach(() => {
      authenticationAdapter.login = mockLoginUser;
    });

    describe('payload creator', () => {
      const mockThunkAPI = {
        dispatch: jest.fn(),
        getState: jest.fn(),
        extra: undefined,
        requestId: '',
        signal: jest.fn() as unknown as AbortSignal,
        rejectWithValue: jest.fn(),
        fulfillWithValue: jest.fn(),
      };
      const resourceId = 'resource id';
      const successResponse = { data: { id: resourceId } };

      it('calls the login API', async () => {
        const loginMock = jest.spyOn(authenticationAdapter, 'login');
        loginMock.mockResolvedValue(successResponse as AxiosResponse);

        await loginUserAsync({ ...payload }, mockThunkAPI);

        expect(mockLoginUser).toHaveBeenCalledWith(
          payload.email,
          payload.password
        );
      });
    });

    describe('given the thunk action is pending', () => {
      it('sets the status to submitting', () => {
        const action = {
          type: loginUser.pending.type,
          email: payload.email,
          password: payload.password,
        };
        const state = reducer(initialState, action);

        expect(state.status).toBe('submitting');
      });
    });

    describe('given the thunk action is fulfilled', () => {
      it('sets the status to succeeded', () => {
        const action = {
          type: loginUser.fulfilled.type,
          email: payload.email,
          password: payload.password,
        };
        const state = reducer(initialState, action);

        expect(state.status).toBe('succeeded');
      });
    });

    describe('given the thunk action is rejected', () => {
      it('sets the status to failed', () => {
        const action = {
          type: loginUser.rejected.type,
          email: payload.email,
          password: payload.password,
          payload: { errors: [] },
        };
        const state = reducer(initialState, action);

        expect(state.status).toBe('failed');
      });
    });
  });
});
