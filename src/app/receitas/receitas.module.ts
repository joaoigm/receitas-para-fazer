import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './receitas.component';
import { TableReceitasModule } from '../components/table-receitas/table-receitas.module';



@NgModule({
  declarations: [
    ReceitasComponent
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    TableReceitasModule
  ]
})
export class ReceitasModule { }
