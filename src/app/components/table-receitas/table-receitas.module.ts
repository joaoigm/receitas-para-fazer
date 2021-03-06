import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableReceitasComponent } from './table-receitas.component';
import { MyDirectivesModule } from '../../directives/my-directives.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TableReceitasComponent
  ],
  imports: [
    CommonModule,
    MyDirectivesModule,
    FontAwesomeModule
  ],
  exports: [
    TableReceitasComponent
  ]
})
export class TableReceitasModule { }
