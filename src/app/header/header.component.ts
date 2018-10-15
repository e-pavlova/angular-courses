import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
