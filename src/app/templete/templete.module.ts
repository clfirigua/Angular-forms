import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempleteRoutingModule } from './templete-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwhitchesComponent } from './swhitches/swhitches.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwhitchesComponent
  ],
  imports: [
    CommonModule,
    TempleteRoutingModule,
    FormsModule
  ]
})
export class TempleteModule { }
