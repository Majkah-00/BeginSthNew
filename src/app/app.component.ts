import { Component, OnInit } from '@angular/core';
import { AvailableResult, BiometryType, Credentials, NativeBiometric } from 'capacitor-native-biometric';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    NativeBiometric.isAvailable().then(
      (result: AvailableResult) => {
        const isAvailable = result.isAvailable;
        const isFaceId = result.biometryType === BiometryType.FINGERPRINT;

        if (isAvailable) {
          // Get user's credentials
          NativeBiometric.getCredentials({
            server: 'www.example.com',
          }).then((credentials: Credentials) => {
            // Authenticate using biometrics before logging the user in
            NativeBiometric.verifyIdentity({
              reason: 'For easy log in',
              title: 'Log in',
              subtitle: 'Maybe add subtitle here?',
              description: 'Maybe a description too?',
            }).then(
              () => {
                // Authentication successful
                console.log('hello');
                // this.login(credentials.username, credentials.password);
              },
              (error) => {
                // Failed to authenticate
              }
            );
          });
        }
      },
      (error) => {
        // Couldn't check availability
      }
    );
  }
}
