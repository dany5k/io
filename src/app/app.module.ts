import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';

import { MiservicioService } from './servicios/miservicio.service';
import { HttpClientModule } from '@angular/common/http';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './componentes/detalle-entidad/detalle-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    DetalleEntidadComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MiservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
