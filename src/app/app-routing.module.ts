import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './core/layouts/user-layout/user-layout.component';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  {
    path: 'start',
    loadChildren: () => import('./modules/start-page/start-page.module').then((m) => m.StartPageModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: UserLayoutComponent,
    // canActivate: [UserGuard],
    children: [
      {
        path: 'job-offers',
        loadChildren: () => import('./modules/job-offer-list/job-offer-list.module').then((m) => m.JobOfferListModule),
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./modules/my-profile/my-profile.module').then((m) => m.MyProfileModule),
      },
      {
        path: 'create-job-offer',
        loadChildren: () => import('./modules/create-job-offer/create-job-offer.module').then(((m)=>m.CreateJobOfferModule)),
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then((m)=>m.AboutModule)
      },
      { redirectTo: '/start', path: '**' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
