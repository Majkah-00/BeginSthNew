import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as actionFromAuth from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Register } from '../../domain/interfaces/register.interface';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionFromAuth.register),
      switchMap((action: Register) =>
        this.authService.register(action).pipe(
          map(() => {
            this.router.navigate(['/auth']);
            return actionFromAuth.registerSuccess();
          }),
          catchError((error) => of(actionFromAuth.registerFailure(error)))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionFromAuth.login),
      switchMap((action) =>
        this.authService.login(action).pipe(
          map((user) => {
            this.router.navigate(['/job-offers']);
            return actionFromAuth.loginSuccess(user);
          }),
          catchError((error) => of(actionFromAuth.loginFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}
