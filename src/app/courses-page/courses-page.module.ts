import { NgModule } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesPageComponent } from './courses-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    CoursesPageComponent,
    CourseComponent
  ],
  exports: [
    CourseComponent,
    CoursesPageComponent
  ]
})
export class CoursesPageModule {
}
