import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { User } from '../../../../shared/models/user.model';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as actionFromAuth from './../actions/auth.actions';

export interface AuthState {
  user: User | null;
  error: string;
  isLoading: boolean;
}

export const authAdapter: EntityAdapter<User> = createEntityAdapter<User>();


export const initialAuthState: AuthState = authAdapter.getInitialState({
  user: null,
  error: '',
  isLoading: false,
});

export const authReducers = createReducer(
  initialAuthState,
  on(actionFromAuth.login, (state) => ({
    ...state, isLoading: true
  })),
  on(actionFromAuth.loginSuccess, (state, action) => ({
    ...state, isLoading: false, user: action
  })),
  on(actionFromAuth.loginFailure, (state, action) => ({
    ...state, isLoading: true, error: action.error
  })),
  on(actionFromAuth.logout, (state): AuthState => ({
    ...state,
    error: '',
    isLoading: false,
    user: null
  })),
);

export const selectAuthState = createFeatureSelector<AuthState>('auth');
