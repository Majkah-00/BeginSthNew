import { Component, OnInit } from '@angular/core';
import { JobOfferFacade } from '../../../../shared/job-offer/store/job-offer.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-offer-details-container',
  templateUrl: './job-offer-details-container.component.html',
  styleUrls: ['./job-offer-details-container.component.scss']
})
export class JobOfferDetailsContainerComponent implements OnInit {
  id: number;
  jobOfferDetails$ = this.jobOfferFacade.jobOffer$;

  constructor(private jobOfferFacade: JobOfferFacade, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      this.jobOfferFacade.getJobOffer(this.id);
    });
  }
}
