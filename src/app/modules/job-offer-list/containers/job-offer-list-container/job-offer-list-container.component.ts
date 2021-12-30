import { Component, OnInit } from '@angular/core';
import { JobOfferFacade } from '../../../../shared/job-offer/store/job-offer.facade';

@Component({
  selector: 'app-job-offer-list-container',
  templateUrl: './job-offer-list-container.component.html',
  styleUrls: ['./job-offer-list-container.component.scss'],
})
export class JobOfferListContainerComponent implements OnInit {
  jobOffers$ = this.jobOfferFacade.jobOffers$;

  constructor(private jobOfferFacade: JobOfferFacade) { }

  ngOnInit() {
    this.jobOfferFacade.loadJobOffers();
  }

  doRefresh(event) {
    this.jobOfferFacade.loadJobOffers();
    event.target.complete();
}
