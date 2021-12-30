import { createSelector } from '@ngrx/store';
import { selectUserState } from './reducers/user.reducer';

export const selectUser = createSelector(selectUserState, state => state.user);
