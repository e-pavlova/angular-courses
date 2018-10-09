import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})

export class BorderDirective implements OnInit {
  public twoWeeks = 12096e5;

  @Input('appBorder') public courseDate: Date;

  constructor(private elementRef: ElementRef) {
  }

  private drawBorder(courseDate: Date) {
    if (courseDate.getTime() < new Date().getTime()
      && courseDate.getTime() >= new Date().getTime() - this.twoWeeks) {
      this.elementRef.nativeElement.style.border = '1px solid rgb(0, 250, 154)';
      this.elementRef.nativeElement.style.borderRadius = '3px';
    } else if (courseDate.getTime() > new Date().getTime()) {
      this.elementRef.nativeElement.style.border = '1px solid rgb(0, 191, 255)';
      this.elementRef.nativeElement.style.borderRadius = '3px';
    }
  }

  ngOnInit() {
    this.drawBorder(this.courseDate);
  }
}
