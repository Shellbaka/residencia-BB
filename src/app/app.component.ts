import { Component } from '@angular/core';
import { PainelComponent } from './Pages/Painel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PainelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
