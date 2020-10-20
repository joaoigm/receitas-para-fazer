import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadExcelComponent } from './upload-excel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    UploadExcelComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    UploadExcelComponent
  ]
})
export class UploadExcelModule { }
