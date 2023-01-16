import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContainerLoginComponent} from './components/container-login/container-login.component';

const routes: Routes = [
  {path:'login', component: ContainerLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
