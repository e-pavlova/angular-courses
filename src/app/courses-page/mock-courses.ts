import {CourseItem} from './course/course.interface';
import {Course} from './course/course';

export const COURSES: CourseItem[] = [
  {id: 1, title: 'Intro', date: '06/15/2018', duration: '1h 15min',
    description: 'How to build your first Hello World Angular application'},
  {id: 2, title: 'Components', date: '06/20/2018', duration: '1h 5min',
    description: 'On this training, we will take a look at custom components in Angular 2'},
  {id: 3, title: 'Unit Testing for Angular', date: '06/20/2018', duration: '1h 2min',
    description: 'This training is for writing Unit tests on the Angular 2 application'},
  {id: 4, title: 'Working with Directives and Pipes', date: '07/04/2018', duration: '1h 18min',
    description: 'This training is about Angular 2 directives and pipes'},
  {id: 5, title: 'Modules, Services and DI', date: '07/11/2018', duration: '1h 24min',
    description: 'Multiple components have to use the same functionality over and over again'},
  {id: 6, title: 'Understanding Сhange Detection', date: '07/23/2018', duration: '1h 5min',
    description: 'Angular 2 introduces a reinvented change detection system that drops digest cycles in favor of one-way flow'}
].map((courseItem) => {
  return new Course(courseItem.id, courseItem.title, courseItem.date, courseItem.duration, courseItem.description);
});
