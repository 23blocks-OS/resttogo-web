// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
// Auth reducers and selectors
import {AppState} from '../../../reducers';
import { isLoggedIn } from '../selectors/auth.selectors';

@Injectable()
export class GatewayGuard implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
        return this.store
            .pipe(
                select(isLoggedIn),
                tap(loggedIn => {
                  console.log('Guard Eval');
                  if (!loggedIn) {
                    console.log('Not Logged');
                    this.router.navigateByUrl('/auth/login');
                  }
                })
            );
    }
}
