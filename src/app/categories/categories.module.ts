import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CategoriesRoutingModule} from './categories-routing.module';
import {CategoriesNavComponent} from './components';

@NgModule({
  declarations: [CategoriesNavComponent],
  exports: [
    CategoriesNavComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule {
}
