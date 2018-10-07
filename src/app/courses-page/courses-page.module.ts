import { NgModule } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesPageComponent } from './courses-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
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
