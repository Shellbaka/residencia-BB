import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  imports: [],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
const saldoElement = document.getElementById('saldo');
const transacoesElement = document.getElementById('transacoes');
const walletsBody = document.getElementById('wallets-body');

if (saldoElement && transacoesElement && walletsBody) {
    saldoElement.innerText = '10';
    transacoesElement.innerText = '5';
}
