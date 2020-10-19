import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorPointerDirective } from './cursor-pointer.directive';



@NgModule({
  declarations: [
    CursorPointerDirective
  ],
  exports: [
    CursorPointerDirective
  ]
})
export class MyDirectivesModule { }
