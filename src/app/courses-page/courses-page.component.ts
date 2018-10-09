import { Component, OnInit, Input, PipeTransform } from '@angular/core';
import { COURSES } from './mock-courses';
import { Course } from './course/course';
import { DurationPipe } from '../shared/pipes/duration.pipe';
import { SearchPipe } from '../shared/pipes/search.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[] = COURSES;
  public search = '';
  private searchPipe: SearchPipe;

  constructor() {
    this.searchPipe = new SearchPipe();
  }

  public ngOnInit() {
  }

  public showSearch() {
    this.courses = this.searchPipe.transform(COURSES, this.search);
  }

  public showLoadMore() {
    console.log('Load More');
  }

  public showDelete(id: number) {
    console.log(id);
  }

}
