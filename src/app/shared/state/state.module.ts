import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { appReducer } from './app.reducer';
import { CustomRouterStateSerializer } from './state-utiles';
import { environment } from '../../../environments/environment';
import { AuthEffects } from '../../modules/auth/store/effects/auth.effects';
import { JobOfferEffect } from '../job-offer/store/effects/job-offer.effect';
import { UserEffect } from '../../modules/my-profile/store/effects/user.effect';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(appReducer, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, JobOfferEffect, UserEffect]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [],
})
export class StateModule {
  static forRoot(): ModuleWithProviders<StateModule> {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomRouterStateSerializer,
        },
      ],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
