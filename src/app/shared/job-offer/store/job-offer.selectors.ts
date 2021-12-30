import { createSelector } from '@ngrx/store';
import { selectJobOffersState } from './reducers/job-offer.reducer';

export const selectJobOffer = createSelector(selectJobOffersState, state => state.jobOffer);
