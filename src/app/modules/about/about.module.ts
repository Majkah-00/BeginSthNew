import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { RulesComponent } from './rules/rules.component';


@NgModule({
  declarations: [AboutAppComponent, AboutAuthorComponent, RulesComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
