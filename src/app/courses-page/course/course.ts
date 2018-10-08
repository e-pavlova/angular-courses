import { CourseItem } from './course.interface';

export class Course implements CourseItem {

  constructor(public id: number,
              public title: string,
              public date: string,
              public duration: string,
              public description: string,
              public topRated: boolean) {
  }
}
