import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageContainerComponent } from './start-page-container/start-page-container.component';


@NgModule({
  declarations: [
    StartPageContainerComponent
  ],
  imports: [
    CommonModule,
    StartPageRoutingModule
  ]
})
export class StartPageModule { }
