import { createAction, props } from '@ngrx/store';
import { JobOffer } from '../../../../modules/create-job-offer/domain/job-offer.interface';


export const createJobOffer = createAction(
  '[CreateJobOffer] CreateJobOffer',
  props<JobOffer>()
);

export const createJobOfferSuccess = createAction(
  '[CreateJobOffer] CreateJobOffer Success',
  props<JobOffer>()
);

export const createJobOfferFailure = createAction(
  '[CreateJobOffer] CreateJobOffer Failure',
  props<{ error: string }>()
);

export const loadJobOffers = createAction(
  '[LoadJobOffer] LoadJobOffer',
);

export const loadJobOffersSuccess = createAction(
  '[LoadJobOffer] LoadJobOfferSuccess',
  props<{ jobOffers: JobOffer[] }>()
);

export const loadJobOffersFailure = createAction(
  '[LoadJobOfferFailure] LoadJobOfferFailure',
  props<{ error: string }>()
);

export const getJobOffer = createAction(
  '[GetJobOffer] GetJobOffer',
  props<{ id: number }>()
);

export const getJobOfferSuccess = createAction(
  '[GetJobOffer] GetJobOffer Success',
  props<JobOffer>()
);

export const getJobOfferFailure = createAction(
  '[GetJobOffer] GetJobOfferFailure',
  props<{error: string}>()
);
