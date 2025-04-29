import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
  `,
  styles: [`
    .header {
      background: #ffce00;
      padding: 1rem;
      font-weight: bold;
    }
  `]
})
export class HeaderComponent {
  @Input() title = 'Painel';
}
