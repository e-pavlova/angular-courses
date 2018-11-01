import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../core/services/course.service';
import {Course} from '../courses-page/course/course';

@Component({
  selector: 'app-edit-add-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  public title: string;
  public description: string;
  public date: string;
  public duration: number;
  public authors = '';

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private router: Router) {
  }

  public update(): void {
    const id: string = this.route.snapshot.params.id;
    this.courseService.updateCourse(parseInt(id, 10), this.title, new Date(this.date), this.duration, this.description);
    this.router.navigate(['/courses']);
  }

  ngOnInit() {
    const id: string = this.route.snapshot.params.id;
    const currCourse: Course = this.courseService.getItemByID(parseInt(id, 10));

    this.title = currCourse.title;
    this.description = currCourse.description;
    this.date = currCourse.date.toUTCString();
    this.duration = currCourse.duration;
  }
}
