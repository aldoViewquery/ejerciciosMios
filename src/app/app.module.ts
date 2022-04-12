import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { listaModule } from './lista/lista.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    listaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
