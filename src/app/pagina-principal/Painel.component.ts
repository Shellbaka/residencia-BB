import { Component } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  title = 'Residência BB';
  saldo = 10;
  numeroTransacoes = 5;
  carteiraNome = 'Carteira 1';
  carteiraEndereco = 'bdecb4a3 15d6c70 d0e8d8d2 51520c';
}
