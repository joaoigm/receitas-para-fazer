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
  },
  {
    path: 'receitas/adicionar',
    loadChildren: () => import('./adicionar-receita/adicionar-receita.module').then( (m) => m.AdicionarReceitaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
