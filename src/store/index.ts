import { configureStore } from '@reduxjs/toolkit';

import formLoginReducer from '@/reducers/FormLogin';
import sampleReducer from '@/reducers/Sample';

const reducers = {
  sample: sampleReducer,
  login: formLoginReducer,
};

export const store = configureStore({ reducer: reducers });

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
