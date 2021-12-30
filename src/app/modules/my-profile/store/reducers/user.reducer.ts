import { User } from '../../../../shared/models/user.model';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as actionFromUser from '../actions/user.action';

export interface UserState {
  user: User;
  error: string;
  isLoading: boolean;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUserState: UserState = userAdapter.getInitialState({
  user: null,
  error: '',
  isLoading: false
});

export const userReducers = createReducer(
  initialUserState,
  on(actionFromUser.getUserSuccess, (state, action) => ({
    ...state, isLoading: false, user: action
  })),
  on(actionFromUser.getUserFailure, (state, action) => ({
    ...state, isLoading: false, error: action.error
  })),
  on(actionFromUser.updateUserSuccess, (state, action) => ({
    ...state, isLoading: false, user: action
  })),
  on(actionFromUser.updateUserFailure, (state, action)=> ({
    ...state, isLoading: true, error: action.error
  }))
);

export const selectUserState = createFeatureSelector<UserState>('user');

// @ts-ignore
export const { selectIds, selectEntities, selectAll, selectTotal } = userAdapter.getSelectors(selectUserState);
