import { CourseItem } from './course.interface';

export class Course {

  public date: Date;

  constructor(public id: number,
              public title: string,
              date: string,
              public duration: number,
              public description: string,
              public topRated: boolean) {

    this.date = new Date(date);
  }
}
