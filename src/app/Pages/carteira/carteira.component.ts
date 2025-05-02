import { Component } from '@angular/core';

@Component({
  selector: 'app-carteiras',
  templateUrl: './carteiras.component.html',
  styleUrls: ['./carteiras.component.css']
})
export class CarteirasComponent {
  carteiras = [
    { nome: 'Carteira 1', saldo: 0.8 },
    { nome: 'Carteira 2', saldo: 0.0 },
    { nome: 'Carteira 3', saldo: 0.1 }
  ];
}
