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
    HistorialComponent
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
