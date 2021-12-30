import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: 'about-app', component: AboutAppComponent },
  { path: 'about-author', component: AboutAuthorComponent },
  { path: 'rules', component: RulesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
