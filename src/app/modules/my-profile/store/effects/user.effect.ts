import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import * as actionFromUser from '../actions/user.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(actionFromUser.getUser),
    switchMap((action) => this.userService.getUser(action.userId).pipe(
      map((user) => actionFromUser.getUserSuccess(user)),
      catchError((error) => of(actionFromUser.getUserFailure(error)))
    ))
  ));

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(actionFromUser.updateUser),
    switchMap((action) => this.userService.updateUser(action).pipe(
        map((user) => actionFromUser.updateUserSuccess(user)),
        catchError((error) => of(actionFromUser.updateUserFailure(error)))
      ))
    ));

  constructor(private actions$: Actions, private userService: UserService) {
  }
}
