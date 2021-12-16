import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './state-utiles';
import { AuthState } from '../../modules/auth/store/reducers/auth.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  auth: AuthState;
}
