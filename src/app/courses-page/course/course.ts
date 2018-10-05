import { CourseItem } from './course.interface';

class Course implements CourseItem {
  id: number;
  title: string;
  date: string;
  duration: string;
  description: string;

  constructor(id: number,
              title: string,
              date: string,
              duration: string,
              description: string) {
  }
}
