import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../../domain/interfaces/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @Output() register = new EventEmitter<Register>();

  hide = true;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onRegister(): void {
    if (this.form.valid) {
      this.register.emit(this.form.value);
    }
  }
}
