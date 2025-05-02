import { Component } from '@angular/core';
import { PainelComponent } from './Pages/painel/Painel.component';
import { TransacaoComponent } from './Pages/transacao/transacao.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [
    HttpClientModule, 
    PainelComponent,
    TransacaoComponent
  ]
})



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PainelComponent, TransacaoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
