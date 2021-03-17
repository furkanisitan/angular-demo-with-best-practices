import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {EnsureImportedOnceModule} from '@app/ensure-imported-once-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule extends EnsureImportedOnceModule {
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
