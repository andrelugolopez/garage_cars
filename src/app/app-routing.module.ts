import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContainerLoginComponent} from './components/container-login/container-login.component';
import {ContainerMenuMecanicoComponent} from './components/container-menu-mecanico/container-menu-mecanico.component';
import {ContainerDetallesReparacionComponent} from './components/container-detalles-reparacion/container-detalles-reparacion.component';
import {ContainerHistorialComponent} from './components/container-historial/container-historial.component';
import {ContainerListaReparacionesComponent} from './components/container-lista-reparaciones/container-lista-reparaciones.component';

const routes: Routes = [

  {path:'', component: ContainerLoginComponent}, 
  {path:'mecanico', component: ContainerMenuMecanicoComponent},
  {path:'detallesReparacion', component: ContainerDetallesReparacionComponent},
  {path:'historial', component: ContainerHistorialComponent},
  {path:'listaReparacion', component: ContainerListaReparacionesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
