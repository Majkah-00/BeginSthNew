import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/state/app.interfaces';
import * as actionsFromAuth from './actions/auth.actions';
import { Observable } from 'rxjs';
import { selectUser, selectUserId } from './auth.selectors';
import { User } from '../../../shared/models/user.model';
import { Register } from '../domain/interfaces/register.interface';
import { Login } from '../domain/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  user$: Observable<User | null> = this.store.select(selectUser);
  userId$: Observable<number | undefined> = this.store.select(selectUserId);

  constructor(private store: Store<AppState>) {
  }

  register(register: Register): void {
    this.store.dispatch(actionsFromAuth.register(register));
  }

  login(data: Login): void {
    this.store.dispatch(actionsFromAuth.login(data));
  }

  logout(): void {
    this.store.dispatch(actionsFromAuth.logout());
  }
}
