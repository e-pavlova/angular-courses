import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    DurationPipe
  ],
  declarations: []
})
export class SharedModule { }
