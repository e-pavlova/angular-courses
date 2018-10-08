import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() public course: Course;
  @Output() onDelete = new EventEmitter();

  delete(e) {
    this.onDelete.emit(this.course.id);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
