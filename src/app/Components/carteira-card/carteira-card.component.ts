import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carteira-card',
  templateUrl: './carteira-card.component.html',
  styleUrls: ['./carteira-card.component.css']
})
export class CarteiraCardComponent {
  @Input() nome!: string;
  @Input() saldo!: number;
}
