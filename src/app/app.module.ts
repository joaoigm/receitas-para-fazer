import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitasService } from './services/receitas.service';
import { EventsService } from './services/events.service';
import { ExcelService } from './services/excel.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ReceitasService,
    EventsService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
