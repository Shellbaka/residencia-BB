import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';


@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  saldo = 10;
  numeroTransacoes = 5;
}
