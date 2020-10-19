import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'receitas',
    pathMatch: 'full'
  },
  {
    path: 'receitas',
    loadChildren: () => import('./receitas/receitas.module').then( (m) => m.ReceitasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
