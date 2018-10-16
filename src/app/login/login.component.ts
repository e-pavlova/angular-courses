import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = '';
  public password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  public onSubmit(): void {
    this.authService.logIn(this.login, this.password);
    this.router.navigate(['/courses']);
  }
  ngOnInit() {
  }

}
