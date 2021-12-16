import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../domain/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() login = new EventEmitter<Login>();

  hide = true;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onLogin(): void {
    if (this.form.valid) {
      this.login.emit(this.form.value);
    }
  }
}
