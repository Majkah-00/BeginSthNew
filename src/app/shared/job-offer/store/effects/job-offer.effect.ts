import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JobOfferService } from '../services/job-offer.service';
import * as actionFromCreateJobOffer from '../actions/job-offer.action'
import { catchError, map, switchMap } from 'rxjs/operators';
import { JobOffer } from '../../../../modules/create-job-offer/domain/job-offer.interface';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class JobOfferEffect {
  createJobOffer$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actionFromCreateJobOffer.createJobOffer),
    switchMap((action: JobOffer) =>
    this.jobOfferService.addJobOffer(action).pipe(
      map((jobOffer) => actionFromCreateJobOffer.createJobOfferSuccess(jobOffer)),
      catchError((error)=> of(actionFromCreateJobOffer.createJobOfferFailure(error)))
    ))
  ));

  loadJobOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionFromCreateJobOffer.loadJobOffers),
      switchMap(() =>
        this.jobOfferService.loadJobOffers().pipe(
          map((jobOffers)=> actionFromCreateJobOffer.loadJobOffersSuccess({jobOffers})),
          catchError((error)=> of(actionFromCreateJobOffer.loadJobOffersFailure(error)))
        ))
    ));

  getJobOffer$ = createEffect(()=> this.actions$.pipe(
    ofType(actionFromCreateJobOffer.getJobOffer),
    switchMap((action)=> this.jobOfferService.getJobOffer(action.id).pipe(
      map((jobOffer)=> actionFromCreateJobOffer.getJobOfferSuccess(jobOffer)),
      catchError((error) => of(actionFromCreateJobOffer.getJobOfferFailure(error)))
    ))
  ));
  
  constructor(private actions$: Actions, private jobOfferService: JobOfferService, private router: Router) {
  }
}
