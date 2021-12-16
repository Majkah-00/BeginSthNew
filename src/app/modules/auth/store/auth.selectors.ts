import { createSelector } from '@ngrx/store';
import { selectAuthState } from './reducers/auth.reducer';

export const selectUser = createSelector(selectAuthState, state => state.user);
export const selectUserId = createSelector(selectAuthState, state => state.user?.userId);
