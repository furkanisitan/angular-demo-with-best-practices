import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CategoriesModule} from '@app/categories';
import {SharedModule} from '@app/shared';
import {ProductCardComponent} from './components';
import {ProductDetailComponent, ProductListComponent} from './pages';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    CategoriesModule
  ]
})
export class ProductsModule {
}
