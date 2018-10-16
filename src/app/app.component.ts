import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router, UrlSegment} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'courses-page';

  public isLoginPage: boolean;

  constructor(private router: Router) {
  }

  public ngOnInit() {
    this.router.events.pipe(
      filter(event => (event instanceof NavigationEnd))
    )
      .subscribe((routeData: NavigationEnd) => {
        if (routeData.urlAfterRedirects === '/login') {
          this.isLoginPage = true;
        } else {
          this.isLoginPage = false;
        }
      });
  }

}
