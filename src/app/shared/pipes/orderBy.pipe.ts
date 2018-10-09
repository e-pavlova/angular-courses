import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses-page/course/course';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    if (courses !== undefined) {
      const orderedCourses: Course[] = courses.sort((a, b) => {
        return a.date.getTime() - b.date.getTime();
      });
      return orderedCourses;
    }
  }
}
