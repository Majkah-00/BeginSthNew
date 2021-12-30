import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterContainerComponent } from './containers/register-container/register-container.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { RegisterComponent } from './presenters/register/register.component';
import { LoginComponent } from './presenters/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [LoginContainerComponent, RegisterContainerComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    IonicModule
  ],
  providers: [
    FingerprintAIO,
    HTTP

  ]
})
export class AuthModule {}
