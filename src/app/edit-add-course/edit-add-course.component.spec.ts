import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddCourseComponent } from './edit-add-course.component';

describe('EditAddCourseComponent', () => {
  let component: EditAddCourseComponent;
  let fixture: ComponentFixture<EditAddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
