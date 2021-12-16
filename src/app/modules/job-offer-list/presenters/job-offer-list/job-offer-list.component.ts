import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-offer-list',
  templateUrl: './job-offer-list.component.html',
  styleUrls: ['./job-offer-list.component.scss'],
})
export class JobOfferListComponent implements OnInit {
  mockedData = [
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000,
      },
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000,
      },
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000,
      },
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000,
      },
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000,
      },
    },
    {
      jobOfferName: 'Frontend developer',
      company: 'Test sp.z.o.o',
      location: 'Warszawa',
      salary: {
        from: 5000,
        to: 10000,
      },
    },
  ];

  constructor() {}

  ngOnInit() {}
}
