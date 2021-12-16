import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOfferListRoutingModule } from './job-offer-list-routing.module';
import { JobOfferListContainerComponent } from './containers/job-offer-list-container/job-offer-list-container.component';
import { JobOfferListComponent } from './presenters/job-offer-list/job-offer-list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [JobOfferListContainerComponent, JobOfferListComponent],
  imports: [CommonModule, JobOfferListRoutingModule, IonicModule],
})
export class JobOfferListModule {}