import { NgModule } from '@angular/core';
// import { MaterialModule } from 'src/app/components/material.module';
import { AdifLibComponent } from './adif-lib.component';



@NgModule({
  declarations: [
    AdifLibComponent
  ],
  imports: [
    // MaterialModule
  ],
  exports: [
    AdifLibComponent
    // MaterialModule
  ]
})
export class AdifLibModule { }
