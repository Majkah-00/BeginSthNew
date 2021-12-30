import { Component, OnInit } from '@angular/core';
import { Login } from '../../domain/interfaces/login.interface';
import { AuthFacade } from '../../store/auth.facade';
import { AlertsService } from '../../store/services/alerts.service';
import { environment } from '../../../../../environments/environment';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  constructor(private authFacade: AuthFacade, private alerts: AlertsService, private http: HTTP) {}

  ngOnInit() {
    this.alerts.fingerPrintAIO();
    this.xd();
  }

  onLogin(login: Login): void {
    this.authFacade.login(login);
    console.log(login);
  }

  async xd() {
    // this.http.useBasicAuth('login','password');
    this.http.get(`${environment.apiUrl}/job-offer`,{}, {'Content-Type':'application/json'})
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });

    // this.http.sendRequest(`${environment.apiUrl}/job-offer`,
    //   {
    //     method: 'get',
    //     // data: { id: 12, message: 'test' },
    //     // headers: { Authorization: 'OAuth2: token' },
    //     timeout: 5000
    //   }
    // )
    //   .then(response => {
    //     // prints 200
    //     console.log(response.status);
    //     console.log(response);
    //   })
    //   .catch(response => {
    //     // prints 403
    //     console.log(response.status);
    //
    //     // prints Permission denied
    //     console.log(response.error);
    //   });
  }
}
