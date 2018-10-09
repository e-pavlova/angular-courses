import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses-page/course/course';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(courses: Course[], search: string): Course[] {
    if (search === undefined) {
      return courses;
    } else {
      const filtered: Course[] = courses.filter((course) => {
        return course.title.toLowerCase().includes(search.toLowerCase());
      });
      return filtered;
    }
  }
}

