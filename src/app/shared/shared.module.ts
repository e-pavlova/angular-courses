import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { BorderDirective } from './directives/border.directive';
import { OrderByPipe } from './pipes/orderBy.pipe';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DurationPipe,
    SearchPipe,
    BorderDirective,
    OrderByPipe
  ],
  exports: [
    DurationPipe,
    SearchPipe,
    BorderDirective,
    OrderByPipe,
    RouterModule
  ]
})
export class SharedModule {
}
