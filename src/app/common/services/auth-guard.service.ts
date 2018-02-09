import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate() {
    if (tokenNotExpired()) {
      return true;
    } else {
      return true;
    }
  }
}
