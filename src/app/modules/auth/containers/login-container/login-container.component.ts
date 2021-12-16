import { Component, OnInit } from '@angular/core';
import { Login } from '../../domain/interfaces/login.interface';
import { AuthFacade } from '../../store/auth.facade';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  constructor(private authFacade: AuthFacade, public faio: FingerprintAIO) {}

  ngOnInit(): void {
    this.check();
    this.show();
    // this.faio.show({
    //   clientId: 'Fingerprint-Demo',
    //   clientSecret: 'password', // Only necessary for Android
    //   disableBackup: true,  // Only for Android(optional)
    //   localizedFallbackTitle: 'Use Pin', // Only for iOS
    //   localizedReason: 'Please authenticate' // Only for iOS
    // }).then(result => {
    //   console.log(result);
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  check() {
    console.log('check');
    this.faio.isAvailable().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  show() {
    console.log('show');
    this.faio.show({
      // clientId: 'Fingerprint-Demo',
      // clientSecret: 'password', // Only necessary for Android
      // disableBackup: true,  // Only for Android(optional)
      // localizedFallbackTitle: 'Use Pin', // Only for iOS
      // localizedReason: 'Please authenticate' // Only for iOS
    }).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

  onLogin(login: Login): void {
    this.authFacade.login(login);
  }
}
