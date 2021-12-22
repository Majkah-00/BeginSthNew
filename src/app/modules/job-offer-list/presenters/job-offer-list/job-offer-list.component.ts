import { Component, Input, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { JobOffer } from '../../../create-job-offer/domain/jobOffer.interface';

@Component({
  selector: 'app-job-offer-list',
  templateUrl: './job-offer-list.component.html',
  styleUrls: ['./job-offer-list.component.scss']
})
export class JobOfferListComponent implements OnInit {
  @Input() jobOffers: JobOffer;

  mockedData = [
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000
      }
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000
      }
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000
      }
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000
      }
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000
      }
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000
      }
    }
  ];

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
