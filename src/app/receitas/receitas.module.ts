import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './receitas.component';
import { TableReceitasModule } from '../components/table-receitas/table-receitas.module';
import { AdicionarReceitaModule } from '../components/adicionar-receita/adicionar-receita.module';
import { UploadExcelModule } from 'src/app/components/upload-excel/upload-excel.module';

@NgModule({
  declarations: [
    ReceitasComponent
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    TableReceitasModule,
    AdicionarReceitaModule
  ]
})
export class ReceitasModule { }
