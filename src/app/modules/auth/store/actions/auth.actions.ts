import { createAction, props } from '@ngrx/store';
import { Register } from '../../domain/interfaces/register.interface';
import { Login } from '../../domain/interfaces/login.interface';
import { User } from '../../../../shared/models/user.model';

export const register = createAction(
  '[Auth] Register',
  props<Register>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

export const login = createAction(
  '[Auth] Login',
  props<Login>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<User>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);


export const logout = createAction('[Auth] Logout');
