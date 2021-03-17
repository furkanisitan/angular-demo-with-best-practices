import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@app/core';
import {AdminComponent} from '@app/layout';
import {LoginComponent} from './pages';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: '/admin/products', pathMatch: 'full'},
      {
        path: 'products',
        loadChildren: () => import('./manage-products/manage-products.module').then(m => m.ManageProductsModule)
      }
    ]
  },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
