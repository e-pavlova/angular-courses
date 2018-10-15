import {Injectable} from '@angular/core';
import {COURSES} from '../../courses-page/mock-courses';
import {Course} from '../../courses-page/course/course';

let courses: Course[] = COURSES;

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() {
  }

  public getList(): Course[] {
    return courses;
  }

  public getItemByID(id: number): Course {
    const item: Course = courses.find((course) => {
      return course.id === id;
    });
    return item;
  }

  public createCourse(title: string, date: Date, duration: number,
                      description?: string, topRated: boolean = false): number {

    const newCourse: Course = new Course(Date.now(), title, date.toUTCString(), duration, description, topRated);

    courses.push(newCourse);

    return newCourse.id;
  }

  public removeCourse(id: number): void {
    courses = courses.filter((course) => {
      return course.id !== id;
    });
  }

  public updateCourse(id: number, title?: string, date?: Date, duration?: number,
                      description?: string, topRated?: boolean): Course {
    const changedCourse: Course = courses.find((course) => {
      return course.id === id;
    });
    if (title !== undefined) {
      changedCourse.title = title;
    }
    if (date !== undefined) {
      changedCourse.date = date;
    }
    if (duration !== undefined) {
      changedCourse.duration = duration;
    }
    if (description !== undefined) {
      changedCourse.description = description;
    }
    if (topRated !== undefined) {
      changedCourse.topRated = topRated;
    }

    return changedCourse;
  }
}
