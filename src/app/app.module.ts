import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { TestComponent } from './components/test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InformacionComponent,
    TestComponent,
    FormularioRegistroComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
