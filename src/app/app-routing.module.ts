import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Templete',
    loadChildren: () => import('./templete/templete.module').then(m=> m.TempleteModule)
  },
  {
    path:'Reactive',
    loadChildren:() => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'**',
    redirectTo:'Templete'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
