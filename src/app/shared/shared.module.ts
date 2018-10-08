import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DurationPipe,
    SearchPipe
  ],
  exports: [
    DurationPipe,
    SearchPipe
  ]
})
export class SharedModule {
}
