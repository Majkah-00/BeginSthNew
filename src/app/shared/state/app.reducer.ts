import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from './app.interfaces';
import { authReducers } from '../../modules/auth/store/reducers/auth.reducer';
import { jobOfferReducers } from '../job-offer/store/reducers/job-offer.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducers,
  jobOffer: jobOfferReducers,
};
