import { createAction, props } from '@ngrx/store';
import { JobOffer } from '../../../../modules/create-job-offer/domain/jobOffer.interface';


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
