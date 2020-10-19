import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableReceitasComponent } from './table-receitas.component';
import { AppModule } from '../../app.module';
import { MyDirectivesModule } from '../../directives/my-directives.module';



@NgModule({
  declarations: [
    TableReceitasComponent
  ],
  imports: [
    CommonModule,
    MyDirectivesModule
  ],
  exports: [
    TableReceitasComponent
  ]
})
export class TableReceitasModule { }
