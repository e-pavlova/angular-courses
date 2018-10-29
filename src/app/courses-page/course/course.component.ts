import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from './course';
import {CourseService} from '../../core/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {

  @Input() public course: Course;
  @Output() onDelete = new EventEmitter();

  delete(e) {
    this.onDelete.emit(this.course.id);
  }

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
  }
}

