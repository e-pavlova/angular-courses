import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public isLoginPage: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
