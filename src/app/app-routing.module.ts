import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LoginComponent } from './login/login.component';
import {NoContentComponent} from './no-content/no-content.component';
import {CourseComponent} from './courses-page/course/course.component';
import {EditCourseComponent} from './edit-course/edit-course.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesPageComponent },
  // { path: 'courses/:id', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course/:id/edit', component: EditCourseComponent },
  { path: '**', component: NoContentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
