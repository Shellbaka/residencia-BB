import { Routes } from '@angular/router';
import { PainelComponent } from './Pages/Painel.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel',
    pathMatch: 'full'
  },
  {
    path: 'painel',
    component: PainelComponent,
    children: [
      {
        path: 'utxos',  // Carrega o componente UtxosComponent
        loadComponent: () =>
          import('../app/Pages/utxos/utxos.component').then(m => m.UtxosComponent)
      },
      // Aqui, adicione as rotas para outras opções, mas sem carregar componentes diretamente
    ]
  }
];