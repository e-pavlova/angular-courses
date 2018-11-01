import {Injectable} from '@angular/core';
import {Local} from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public logIn(email: string, password: string): void {
    const loginObj = JSON.stringify({'email': email});
    if (email !== '' && password !== '') {
      localStorage.setItem('currentUser', loginObj);
    }
  }

  public logOut(): void {
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  public getUserInfo(): string {
    const userLogin = localStorage.getItem('currentUser');
    return JSON.parse(userLogin).email;
  }
}
