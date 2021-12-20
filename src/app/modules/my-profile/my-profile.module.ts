import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileContainerComponent } from './containers/my-profile-container/my-profile-container.component';
import { MyProfileComponent } from './presenters/my-profile/my-profile.component';
import { IonicModule } from '@ionic/angular';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CameraPreview } from '@awesome-cordova-plugins/camera-preview/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [MyProfileContainerComponent, MyProfileComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [CameraPreview, Camera],
})
export class MyProfileModule {}
