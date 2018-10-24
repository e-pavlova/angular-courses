import {Component, OnInit} from '@angular/core';
import {CourseService} from '../core/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public title: string;
  public date: string;
  public duration: number;
  public description: string;

  constructor(private courseService: CourseService) {
  }

  public addCourse(): void {
    this.courseService.createCourse(this.title, this.date, this.duration, this.description);
  }

  ngOnInit() {
  }
}
