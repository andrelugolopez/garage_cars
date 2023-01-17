import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContainerLoginComponent} from './components/container-login/container-login.component';
import {ContainerMenuMecanicoComponent} from './components/container-menu-mecanico/container-menu-mecanico.component';
import {ContainerDetallesReparacionComponent} from './components/container-detalles-reparacion/container-detalles-reparacion.component';
import {ContainerHistorialComponent} from './components/container-historial/container-historial.component';
import {ContainerListaReparacionesComponent} from './components/container-lista-reparaciones/container-lista-reparaciones.component';
import { ContainerMenuAdministradorComponent } from './components/container-menu-administrador/container-menu-administrador.component';
import { ContainerIngresoVehiculoComponent } from './components/container-ingreso-vehiculo/container-ingreso-vehiculo.component';
import { ContainerListaMecanicosComponent } from './components/container-lista-mecanicos/container-lista-mecanicos.component';
import { ContainerListaClientesComponent } from './components/container-lista-clientes/container-lista-clientes.component';


const routes: Routes = [

  {path:'', component: ContainerLoginComponent}, 
  {path:'mecanico', component: ContainerMenuMecanicoComponent},
  {path:'detallesReparacion', component: ContainerDetallesReparacionComponent},
  {path:'historial', component: ContainerHistorialComponent},
  {path:'listaReparacion', component: ContainerListaReparacionesComponent},
  {path:'administrador', component: ContainerMenuAdministradorComponent},
  {path:'ingresoVehiculo', component: ContainerIngresoVehiculoComponent},
  {path:'listaMecanicos', component: ContainerListaMecanicosComponent},
  {path:'listaClientes', component: ContainerListaClientesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
