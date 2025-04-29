import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content">
      <div class="cards">
        <div class="card">
          <h4>Saldo</h4>
          <p>10</p>
        </div>
        <div class="card">
          <h4>Número de transações</h4>
          <p>5</p>
        </div>
      </div>

      <h3>Carteiras</h3>
      <table>
        <thead>
          <tr><th>Nome</th><th>Endereço</th></tr>
        </thead>
        <tbody>
          <tr><td>Carteira 1</td><td>bdecb4a3 15d6c70 d0e8d8d2 51520c</td></tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .content { padding: 1rem; }
    .cards {
      display: flex;
      gap: 1rem;
    }
    .card {
      background: #f0f0f0;
      padding: 1rem;
      border-radius: 8px;
      min-width: 150px;
      text-align: center;
    }
    table {
      margin-top: 1rem;
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #999;
      padding: 0.5rem;
    }
  `]
})
export class DashboardContentComponent {}
