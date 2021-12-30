import { Injectable } from '@angular/core';
import { AlertController, ToastController, NavController } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { AuthFacade } from '../auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor(
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private navCtrl: NavController,
    private faio: FingerprintAIO,
    private authFacade: AuthFacade
  ) {}

  async toastInfo(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color: 'primary',
      animated: true,
      position: 'bottom',
    });
    toast.present();
  }

  async fingerPrintAIO() {
    this.faio
      .isAvailable()
      .then((result: any) => {
        this.faio
          .show({
            title: 'Biometric Authentication',
            subtitle: 'Zaloguj się',
            disableBackup: true,
          })
          .then((res: any) => {
            // TODO temp solution
            this.authFacade.login({
              email: 'test@test.pl',
              password: 'Haslo12@'
            });

            this.navCtrl.navigateForward('/job-offers', { animated: true });
            return true;
          })
          .catch((error: any) => {
            this.toastError(error.message);
            return false;
          });
      })
      .catch((error: any) => {
        // this.toastError('This phone don\'t have biometric hardware or it is deactivated, please check it');
      });
  }

  private async toastError(message) {
    const toast = await this.toastController.create({
      message,
      duration: 4000,
      color: 'danger',
      animated: true,
      position: 'bottom',
    });
    toast.present();
  }
}
