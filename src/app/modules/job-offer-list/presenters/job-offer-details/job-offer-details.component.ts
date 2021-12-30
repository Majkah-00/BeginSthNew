import { Component, Input, OnInit } from '@angular/core';
import { JobOffer } from '../../../create-job-offer/domain/job-offer.interface';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-job-offer-details',
  templateUrl: './job-offer-details.component.html',
  styleUrls: ['./job-offer-details.component.scss']
})
export class JobOfferDetailsComponent implements OnInit {
  @Input() jobOffer: JobOffer;

  constructor(private callNumber: CallNumber) {
  }

  ngOnInit() {
  }

  call(): void {
    this.callNumber.callNumber('18001010101', true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
