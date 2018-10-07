import { Component, OnInit, Input } from '@angular/core';
import { COURSES } from './mock-courses';
import { Course } from './course/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public courses: Course[] = COURSES;
  public search = '';

  showSearch() {
    console.log(this.search);
  }

  showLoadMore() {
    console.log('Load More');
  }

  constructor() {
  }

  ngOnInit() {
  }
}
