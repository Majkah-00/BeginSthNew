import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateJobOfferRoutingModule } from './create-job-offer-routing.module';
import { CreateJobOfferContainerComponent } from './container/create-job-offer-container/create-job-offer-container.component';
import { CreateJobOfferComponent } from './presenter/create-job-offer/create-job-offer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CreateJobOfferContainerComponent, CreateJobOfferComponent],
  imports: [
    CommonModule,
    CreateJobOfferRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CreateJobOfferModule { }
