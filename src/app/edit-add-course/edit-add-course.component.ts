import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {CourseService} from '../core/services/course.service';
import {Course} from '../courses-page/course/course';

@Component({
  selector: 'app-edit-add-course',
  templateUrl: './edit-add-course.component.html',
  styleUrls: ['./edit-add-course.component.css']
})
export class EditAddCourseComponent implements OnInit {

  public title: string;
  public description: string;
  public date: Date;
  public duration: number;
  public authors = '';

  constructor(private route: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id;
    const currCourse: Course = this.courseService.getItemByID(parseInt(id, 10));

    this.title = currCourse.title;
    this.description = currCourse.description;
    this.date = currCourse.date;
    this.duration = currCourse.duration;
  }

}
