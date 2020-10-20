import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarReceitaComponent } from './adicionar-receita.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UploadExcelModule } from '../upload-excel/upload-excel.module';

@NgModule({
  declarations: [
    AdicionarReceitaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    UploadExcelModule
  ],
  exports: [
    AdicionarReceitaComponent
  ]
})
export class AdicionarReceitaModule { }
