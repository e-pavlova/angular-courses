import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CoursesPageModule } from './courses-page/courses-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CoursesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
