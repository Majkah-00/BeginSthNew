import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserLayoutComponent],
  imports: [CommonModule, RouterModule, IonicModule],
  exports: [UserLayoutComponent],
})
export class CoreModule {}
