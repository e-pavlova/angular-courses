import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CoursesPageModule } from './courses-page/courses-page.module';
import { LoginComponent} from './login/login.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AppRoutingModule } from './app-routing.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import {ConfirmationDialogComponent} from './core/confirmation-dialog/confirmation-dialog.component';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoContentComponent,
    EditCourseComponent,
    AddCourseComponent,
],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    CoursesPageModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
