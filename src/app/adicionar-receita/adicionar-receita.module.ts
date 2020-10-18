import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarReceitaRoutingModule } from './adicionar-receita-routing.module';
import { AdicionarReceitaComponent } from './adicionar-receita.component';

@NgModule({
  declarations: [
    AdicionarReceitaComponent
  ],
  imports: [
    CommonModule,
    AdicionarReceitaRoutingModule
  ]
})
export class AdicionarReceitaModule { }
