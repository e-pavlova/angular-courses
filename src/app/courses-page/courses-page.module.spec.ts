import { CoursesPageModule } from './courses-page.module';

describe('CoursesPageModule', () => {
  let coursesModule: CoursesPageModule;

  beforeEach(() => {
    coursesModule = new CoursesPageModule();
  });

  it('should create an instance', () => {
    expect(coursesModule).toBeTruthy();
  });
});
