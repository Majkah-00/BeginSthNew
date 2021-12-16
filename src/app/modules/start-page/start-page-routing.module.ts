import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageContainerComponent } from './start-page-container/start-page-container.component';

const routes: Routes = [
  {path: '', component: StartPageContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartPageRoutingModule { }
