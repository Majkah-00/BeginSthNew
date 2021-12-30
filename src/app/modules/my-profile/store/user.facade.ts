import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/state/app.interfaces';
import { selectUser } from './user.selectors';
import * as actionFromUser from './actions/user.action';
import { User } from '../../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserFacade {
  user$ = this.store.select(selectUser);

  constructor(private store: Store<AppState>) {
  }

  getUser(userId: number): void {
    return this.store.dispatch(actionFromUser.getUser({userId}));
  }

  updateUser(user: User): void {
    return this.store.dispatch(actionFromUser.updateUser(user));
  }
}
