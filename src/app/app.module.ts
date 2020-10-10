import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitasService } from './services/receitas.service';
import { TableReceitasComponent } from './components/table-receitas/table-receitas.component';
import { CursorPointerDirective } from './directives/cursor-pointer.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableReceitasComponent,
    CursorPointerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ReceitasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
