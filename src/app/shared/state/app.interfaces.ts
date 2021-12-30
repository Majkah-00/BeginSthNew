import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './state-utiles';
import { AuthState } from '../../modules/auth/store/reducers/auth.reducer';
import { JobOfferState } from '../job-offer/store/reducers/job-offer.reducer';
import { UserState } from '../../modules/my-profile/store/reducers/user.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  auth: AuthState;
  jobOffer: JobOfferState;
  user: UserState;
}
