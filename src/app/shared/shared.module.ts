import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FilterPipe, GroupByModPipe} from './pipes';

@NgModule({
  declarations: [GroupByModPipe, FilterPipe],
  exports: [
    GroupByModPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
