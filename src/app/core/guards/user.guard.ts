import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthFacade } from '../../modules/auth/store/auth.facade';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authFacade.userId$.pipe(
      map((userId) => {
        if (userId) {
          return true;
        } else {
          this.router.navigate(['/auth']);
          return false;
        }
      })
    );
  }
}
