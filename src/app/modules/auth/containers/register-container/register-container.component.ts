import { Component } from '@angular/core';
import { Register } from '../../domain/interfaces/register.interface';
import { AuthFacade } from '../../store/auth.facade';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
})
export class RegisterContainerComponent {
  constructor(private authFacade: AuthFacade) {}

  onRegister(register: Register): void {
    this.authFacade.register(register);
  }
}
