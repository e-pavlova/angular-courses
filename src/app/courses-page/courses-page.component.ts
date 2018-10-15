import {Component, OnInit, Input, PipeTransform} from '@angular/core';
import {Course} from './course/course';
import {DurationPipe} from '../shared/pipes/duration.pipe';
import {SearchPipe} from '../shared/pipes/search.pipe';
import {CourseService} from '../core/services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[];
  public search = '';
  private searchPipe: SearchPipe;
  private initCourses: Course[];

  constructor(private courseService: CourseService) {
    this.searchPipe = new SearchPipe();
  }

  public ngOnInit() {
    this.initCourses = this.courseService.getList();
    this.courses = [...this.initCourses];
  }

  public showSearch() {
    this.courses = this.searchPipe.transform(this.initCourses, this.search);
  }

  public showLoadMore() {
    console.log('Load More');
  }

  public showDelete(id: number) {
    this.courseService.removeCourse(id);
    this.initCourses = this.courseService.getList();
    this.showSearch();
  }

}
