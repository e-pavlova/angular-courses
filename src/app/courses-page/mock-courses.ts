import {CourseItem} from './course/course.interface';
import {Course} from './course/course';

export const COURSES: Course[] = [
  {
    id: 1, title: 'Intro', date: '06/15/2018', duration: '1h 15min',
    description: 'How to build your first Hello World Angular application', topRated: true
  },
  {
    id: 2, title: 'Components', date: '06/20/2018', duration: '1h 5min',
    description: 'On this training, we will take a look at custom components in Angular 2, ' +
      'what they are, how to build components in Angular 2 application and pass data between them', topRated: false
  },
  {
    id: 3, title: 'Unit Testing for Angular', date: '06/20/2018', duration: '1h 2min',
    description: 'This training is for writing Unit tests on the Angular 2 application. ' +
      'During the training people will be receive understanding what Unit tests are, ' +
      'why they are needed, how to write code and Unit tests', topRated: true
  },
  {
    id: 4, title: 'Working with Directives and Pipes', date: '07/04/2018', duration: '1h 18min',
    description: 'This training is about Angular 2 directives and pipes. It covers pipes purpose, ' +
      'build-in pipes usage and custom pipes creation. ' +
      'Participants will know about built-in directives and how to write custom directives', topRated: false
  },
  {
    id: 5, title: 'Modules, Services and DI', date: '07/11/2018', duration: '1h 24min',
    description: 'Multiple components have to use the same functionality over and over again. ' +
      'To not copy and paste same code each time we need to use some other way. ' +
      'So let\'s figure out how services can be used for this purpose', topRated: true
  },
  {
    id: 6, title: 'Understanding Сhange Detection', date: '07/23/2018', duration: '1h 5min',
    description: 'Angular 2 introduces a reinvented change detection system that drops digest cycles in favor of one-way flow. ' +
      'Additionally, change detection can now be controlled and fine-tuned by developers to get the most of the framework\'s performance',
    topRated: false
  }
].map((courseItem) => {
  return new Course(courseItem.id, courseItem.title, courseItem.date, courseItem.duration, courseItem.description, courseItem.topRated);
});
