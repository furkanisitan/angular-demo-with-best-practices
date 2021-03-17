import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  AdminComponent,
  AdminHeaderComponent,
  FooterComponent,
  PublicComponent,
  PublicHeaderComponent
} from './components';
import {LayoutRoutingModule} from './layout-routing.module';

@NgModule({
  declarations: [
    PublicComponent,
    AdminComponent,
    FooterComponent,
    PublicHeaderComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
  ],
  exports: [
    PublicComponent,
    AdminComponent
  ]
})
export class LayoutModule {
}
