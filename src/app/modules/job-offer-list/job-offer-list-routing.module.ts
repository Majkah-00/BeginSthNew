import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobOfferListContainerComponent } from './containers/job-offer-list-container/job-offer-list-container.component';

const routes: Routes = [{ path: '', component: JobOfferListContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobOfferListRoutingModule {}
