import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { JobOffer } from '../../../../modules/create-job-offer/domain/job-offer.interface';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as actionFromCreateJobOffer from '../actions/job-offer.action';

export interface JobOfferState {
  jobOffer: JobOffer;
  error: string;
  isLoading: boolean;
}

export const jobOfferAdapter: EntityAdapter<JobOffer> = createEntityAdapter<JobOffer>();

export const initialCreateJobOfferState: JobOfferState = jobOfferAdapter.getInitialState({
  jobOffer: null,
  error: '',
  isLoading: false
});

export const jobOfferReducers = createReducer(
  initialCreateJobOfferState,
  on(actionFromCreateJobOffer.createJobOfferSuccess, (state, action) => ({
    ...state, isLoading: false, jobOffer: action
  })),
  on(actionFromCreateJobOffer.createJobOfferFailure, (state, action) => ({
    ...state, isLoading: true, error: action.error
  })),
  // @ts-ignore
  on(actionFromCreateJobOffer.loadJobOffersSuccess, (state, action) =>
    // @ts-ignore
    jobOfferAdapter.setAll(action.jobOffers, { ...state, isLoading: false })
  ),
  on(actionFromCreateJobOffer.loadJobOffersFailure, (state, action) => ({
    ...state, isLoading: true, error: action.error
  })),
  on(actionFromCreateJobOffer.getJobOfferSuccess, (state,action) => ({
    ...state, isLoading: false, jobOffer: action
  })),
  on(actionFromCreateJobOffer.getJobOfferFailure, (state, action) => ({
    ...state, isLoading: true, error: action.error
  }))
);

export const selectJobOffersState = createFeatureSelector<JobOfferState>('jobOffer');

// @ts-ignore
export const { selectIds, selectEntities, selectAll, selectTotal } = jobOfferAdapter.getSelectors(selectJobOffersState);
