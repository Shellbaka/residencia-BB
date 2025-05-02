import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { HistoricoTransacaoComponent } from '../../Components/historico-transacao/historico-transacao.component';

@Component({
  selector: 'app-transacao',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    HistoricoTransacaoComponent
  ],
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent {}
