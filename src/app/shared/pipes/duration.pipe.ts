import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  public hours: number;
  public minutes: number;

  transform(time: number): string {
    if (time < 60) {
      this.minutes = time;

      return `${this.minutes}min`;
    } else {
      this.hours = Math.floor(time / 60);
      time = time - (this.hours * 60);
    }
    this.minutes = time;

    return `${this.hours}h ${this.minutes}min`;
  }
}

