import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MenuMecanicoComponent } from './components/menu-mecanico/menu-mecanico.component';
import { ContainerMenuMecanicoComponent } from './components/container-menu-mecanico/container-menu-mecanico.component';
import { LoginComponent } from './components/login/login.component';
import { ContainerLoginComponent } from './components/container-login/container-login.component';
import { ContainerListaReparacionesComponent } from './components/container-lista-reparaciones/container-lista-reparaciones.component';
import { ListaReparacionesComponent } from './components/lista-reparaciones/lista-reparaciones.component';
import { ContainerDetallesReparacionComponent } from './components/container-detalles-reparacion/container-detalles-reparacion.component';
import { DetallesReparacionComponent } from './components/detalles-reparacion/detalles-reparacion.component';
import { ContainerHistorialComponent } from './components/container-historial/container-historial.component';
import { HistorialComponent } from './components/historial/historial.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { ContainerMenuAdministradorComponent } from './components/container-menu-administrador/container-menu-administrador.component';
import { ContainerIngresoVehiculoComponent } from './components/container-ingreso-vehiculo/container-ingreso-vehiculo.component';
import { IngresoVehiculoComponent } from './components/ingreso-vehiculo/ingreso-vehiculo.component';
import { ListaMecanicosComponent } from './components/lista-mecanicos/lista-mecanicos.component';
import { ContainerListaMecanicosComponent } from './components/container-lista-mecanicos/container-lista-mecanicos.component';
import { ContainerListaClientesComponent } from './components/container-lista-clientes/container-lista-clientes.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuMecanicoComponent,
    ContainerMenuMecanicoComponent,
    LoginComponent,
    ContainerLoginComponent,
    ContainerListaReparacionesComponent,
    ListaReparacionesComponent,
    ContainerDetallesReparacionComponent,
    DetallesReparacionComponent,
    ContainerHistorialComponent,
    HistorialComponent,
    MenuAdministradorComponent,
    ContainerMenuAdministradorComponent,
    ContainerIngresoVehiculoComponent,
    IngresoVehiculoComponent,
    ListaMecanicosComponent,
    ContainerListaMecanicosComponent,
    ContainerListaClientesComponent,
    ListaClientesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
