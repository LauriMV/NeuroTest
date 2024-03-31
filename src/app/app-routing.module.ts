import { TestComponent } from './components/test/test.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'registro', component: FormularioRegistroComponent},
  {path: 'informacion', component: InformacionComponent},
  {path: 'test',component: TestComponent},
  {path: '**', redirectTo: 'informacion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
