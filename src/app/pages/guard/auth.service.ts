import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private currentUser = JSON.parse(window.sessionStorage.getItem('profile') as string);

  constructor(private router: Router) { }

  canActivateChild(): boolean {
    if (this.isAuthorized()) {
      return true;
    } else {
      this.router.navigate(['/pages/sacco/home']);
      return false;
    }
  }

  private isAuthorized(): boolean {
    return true

  }
}
