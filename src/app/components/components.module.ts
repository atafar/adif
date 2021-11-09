import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';
// import { MaterialModule } from './material.module';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    PruebaComponent,
    // MatExpansionModule
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports:[
    PruebaComponent,
    MatExpansionModule
  ]
})
export class ComponentsModule { }
