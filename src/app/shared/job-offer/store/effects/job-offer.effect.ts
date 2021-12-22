import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JobOfferService } from '../services/job-offer.service';
import * as actionFromCreateJobOffer from '../actions/job-offer.action'
import { catchError, map, switchMap } from 'rxjs/operators';
import { JobOffer } from '../../../../modules/create-job-offer/domain/jobOffer.interface';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class JobOfferEffect {
  createJobOffer$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actionFromCreateJobOffer.createJobOffer),
    switchMap((action: JobOffer) =>
    this.jobOfferService.addJobOffer(action).pipe(
      map((jobOffer) => {
        return actionFromCreateJobOffer.createJobOfferSuccess(jobOffer);
      }),
      catchError((error)=> of(actionFromCreateJobOffer.createJobOfferFailure(error)))
    ))
  ));

  loadJobOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionFromCreateJobOffer.loadJobOffers),
      switchMap((action: JobOffer) =>
        this.jobOfferService.loadJobOffer(action).pipe(
          map((jobOffer)=> {
            return actionFromCreateJobOffer.loadJobOffersSuccess(jobOffer);
          }),
          catchError((error)=> of(actionFromCreateJobOffer.loadJobOffersFailure(error)))
        ))
    ));
  
  constructor(private actions$: Actions, private jobOfferService: JobOfferService, private router: Router) {
  }
}
