import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobOfferListContainerComponent } from './containers/job-offer-list-container/job-offer-list-container.component';
import { JobOfferDetailsContainerComponent } from './containers/job-offer-details-container/job-offer-details-container.component';

const routes: Routes = [{ path: '', component: JobOfferListContainerComponent },
  { path: ':id', component: JobOfferDetailsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOfferListRoutingModule {
}
