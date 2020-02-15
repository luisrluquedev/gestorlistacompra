import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TareaServiceTsService } from "./services/tarea.service.ts.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TareaServiceTsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
