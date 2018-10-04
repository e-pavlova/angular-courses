import { NgModule } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CoursesComponent,
    CourseComponent],
  exports: [
    CourseComponent,
    CoursesComponent
  ]
})
export class CoursesModule {
}
