import { Component, Input, OnInit } from '@angular/core';
import { JobOffer } from '../../../create-job-offer/domain/job-offer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-offer-list',
  templateUrl: './job-offer-list.component.html',
  styleUrls: ['./job-offer-list.component.scss']
})
export class JobOfferListComponent implements OnInit {
  @Input() jobOffers: JobOffer[];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  jobOfferData(offerId): void {
    this.router.navigate([`/job-offers/${offerId}`]);
  }
}
