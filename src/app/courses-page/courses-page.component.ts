import {Component, OnInit} from '@angular/core';
import {Course} from './course/course';
import {SearchPipe} from '../shared/pipes/search.pipe';
import {CourseService} from '../core/services/course.service';
import {ConfirmationDialogService} from '../core/confirmation-dialog/confirmation-dialog.service';
import {Router} from '@angular/router';

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

  constructor(private courseService: CourseService,
              private confirmationDialogService: ConfirmationDialogService,
              private router: Router) {
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
    this.confirmationDialogService.confirm('', 'Do you really want to delete this course?')
      .then((confirmed) => {
        if (confirmed) {
          this.courseService.removeCourse(id);
          this.initCourses = this.courseService.getList();
          this.showSearch();
        }
      })
      .catch(() => console.log('User dismissed the dialog' +
        '(e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
