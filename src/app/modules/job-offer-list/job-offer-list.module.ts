import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferListRoutingModule } from './job-offer-list-routing.module';
import { JobOfferListContainerComponent } from './containers/job-offer-list-container/job-offer-list-container.component';
import { JobOfferListComponent } from './presenters/job-offer-list/job-offer-list.component';
import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { JobOfferDetailsComponent } from './presenters/job-offer-details/job-offer-details.component';
import { JobOfferDetailsContainerComponent } from './containers/job-offer-details-container/job-offer-details-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import '../../core/extensions/string.formater';

@NgModule({
  declarations: [JobOfferListContainerComponent, JobOfferListComponent, JobOfferDetailsComponent, JobOfferDetailsContainerComponent],
  imports: [CommonModule, JobOfferListRoutingModule, IonicModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  providers: [CallNumber]
})
export class JobOfferListModule {
}
