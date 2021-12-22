import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobOfferContainerComponent } from './container/create-job-offer-container/create-job-offer-container.component';

const routes: Routes = [{path: '', component: CreateJobOfferContainerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateJobOfferRoutingModule { }
