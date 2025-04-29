import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">
      <ul>
        <li *ngFor="let item of menu" (click)="selectItem(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 200px;
      background: #002f6c;
      color: white;
      padding: 1rem;
      height: 100vh;
    }
    ul { list-style: none; padding: 0; }
    li {
      padding: 0.5rem;
      cursor: pointer;
    }
    li:hover {
      background: #004b99;
    }
  `]
})
export class SidebarComponent {
  @Output() selected = new EventEmitter<string>();

  menu = ['Painel', 'Histórico de transações', 'Criar transação', 'Carteiras', 'UTXOs', 'Console', 'Configurações'];

  selectItem(item: string) {
    this.selected.emit(item);
  }
}
