import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page/courses-page.component';
import { LoginComponent } from './login/login.component';
import { NoContentComponent } from './no-content/no-content.component';
import { CourseComponent } from './courses-page/course/course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import {AuthGuard} from './core/guards/authGuard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuard] },
  // { path: 'courses/:id', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course/:id/edit', component: EditCourseComponent, canActivate: [AuthGuard] },
  { path: 'course/add', component: AddCourseComponent, canActivate: [AuthGuard] },
  { path: '**', component: NoContentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
