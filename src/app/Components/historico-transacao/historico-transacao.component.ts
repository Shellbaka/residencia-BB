import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../Services/historico.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico-transacao',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './historico-transacao.component.html',
  styleUrls: ['./historico-transacao.component.css']
})
export class HistoricoTransacaoComponent implements OnInit {
  transacoes: any[] = [];

  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    this.carregarTransacoes();
  }

  carregarTransacoes(): void {
    this.historicoService.getTransacoes().subscribe(
      (data) => {
        this.transacoes = data;
      },
      (error) => {
        console.error('Erro ao carregar transações', error);
      }
    );
  }
}
