import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoriesModule} from '@app/categories';
import {SharedModule} from '@app/shared';
import {ManageProductsRoutingModule} from './manage-products-routing.module';
import {
  AdminProductListComponent,
  AdminProductReactiveFormComponent,
  AdminProductTemplateFormComponent
} from './pages';

@NgModule({
  declarations: [
    AdminProductListComponent,
    AdminProductTemplateFormComponent,
    AdminProductReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ManageProductsRoutingModule,
    SharedModule,
    CategoriesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageProductsModule {
}
