import { Component, OnInit } from '@angular/core';
import { Login } from '../../domain/interfaces/login.interface';
import { AuthFacade } from '../../store/auth.facade';
import { AlertsService } from '../../store/services/alerts.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent implements OnInit {
  constructor(private authFacade: AuthFacade, private alerts: AlertsService) {}

  ngOnInit() {
    this.alerts.fingerPrintAIO();
  }

  onLogin(login: Login): void {
    this.authFacade.login(login);
  }
}
