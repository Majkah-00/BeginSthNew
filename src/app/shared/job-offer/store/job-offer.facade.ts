import { Injectable } from '@angular/core';
import { JobOffer } from '../../../modules/create-job-offer/domain/jobOffer.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.interfaces';
import * as actionFromJobOffer from './actions/job-offer.action';


@Injectable({
  providedIn: 'root'
})

export class JobOfferFacade {

  constructor(private store: Store<AppState>) {
  }

  createJobOffer(jobOffer: JobOffer): void {
    this.store.dispatch(actionFromJobOffer.createJobOffer(jobOffer));
  }

  loadJobOffers(): void {
    this.store.dispatch(actionFromJobOffer.loadJobOffers());
  }
}
