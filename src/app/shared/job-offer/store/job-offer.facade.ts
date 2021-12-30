import { Injectable } from '@angular/core';
import { JobOffer } from '../../../modules/create-job-offer/domain/job-offer.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.interfaces';
import * as actionFromJobOffer from './actions/job-offer.action';
import { selectAll } from './reducers/job-offer.reducer';
import { selectJobOffer } from './job-offer.selectors';


@Injectable({
  providedIn: 'root'
})

export class JobOfferFacade {
  jobOffers$ = this.store.select(selectAll);
  jobOffer$ = this.store.select(selectJobOffer);

  constructor(private store: Store<AppState>) {
  }

  createJobOffer(jobOffer: JobOffer): void {
    this.store.dispatch(actionFromJobOffer.createJobOffer(jobOffer));
  }

  loadJobOffers(): void {
    this.store.dispatch(actionFromJobOffer.loadJobOffers());
  }

  getJobOffer(id: number): void {
   return this.store.dispatch(actionFromJobOffer.getJobOffer({ id }));
  }
}
