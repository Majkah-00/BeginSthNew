import { createAction, props } from '@ngrx/store';
import { User } from '../../../../shared/models/user.model';

export const getUser = createAction(
  '[GetUser] GetUser',
  props<{userId: number}>()
);

export const getUserSuccess = createAction(
  '[GetUser] GetUser Success',
  props<User>()
);

export const getUserFailure = createAction(
  '[GetUser] GetUserFailure',
  props<{error: string}>()
);

export const updateUser = createAction(
  '[UpdateUser] UpdateUser',
  props<User>()
);

export const updateUserSuccess = createAction(
  '[UpdateUser] UpdateUserSuccess',
  props<User>()
);

export const updateUserFailure = createAction(
  '[UpdateUser] UpdateUserFailure',
  props<{error: string}>()
);
