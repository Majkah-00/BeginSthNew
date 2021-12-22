import { Component, OnInit } from '@angular/core';
import { JobOffer } from '../../domain/jobOffer.interface';
import { JobOfferFacade } from '../../../../shared/job-offer/store/job-offer.facade';

@Component({
  selector: 'app-create-job-offer-container',
  templateUrl: './create-job-offer-container.component.html',
  styleUrls: ['./create-job-offer-container.component.scss'],
})
export class CreateJobOfferContainerComponent implements OnInit {

  constructor(private jobOfferFacade: JobOfferFacade) { }

  ngOnInit() {}

  createJobOffer(jobOffer: JobOffer) {
    console.log(jobOffer);
    this.jobOfferFacade.createJobOffer(jobOffer);
  }
}
