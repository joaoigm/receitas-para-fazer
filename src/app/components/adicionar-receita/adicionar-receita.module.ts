import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarReceitaComponent } from './adicionar-receita.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdicionarReceitaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdicionarReceitaComponent
  ]
})
export class AdicionarReceitaModule { }
