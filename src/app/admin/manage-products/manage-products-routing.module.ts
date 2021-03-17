import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  AdminProductListComponent,
  AdminProductReactiveFormComponent,
  AdminProductTemplateFormComponent
} from './pages';

const routes: Routes = [
  {path: '', component: AdminProductListComponent},
  {path: 'template-form', component: AdminProductTemplateFormComponent},
  {path: 'reactive-form', component: AdminProductReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProductsRoutingModule {
}
