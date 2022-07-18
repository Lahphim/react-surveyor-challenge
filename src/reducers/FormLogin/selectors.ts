import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '@/store';
import { FormState } from '@/types/form';

const selectFormLoginState = createSelector(
  (state: AppState) => state.login,
  (store: FormState) => store
);

export const isFormSubmitting = createSelector(
  selectFormLoginState,
  (store: FormState) => store.status === 'submitting'
);
