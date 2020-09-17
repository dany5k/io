import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path: 'welcome', component: BienvenidoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'paises/listado', component: ControlEntidadComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
