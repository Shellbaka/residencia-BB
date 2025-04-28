import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PainelComponent } from './pagina-principal/Painel.component';

@Component({
  selector: 'app-root',
  standalone: true,   // <- importantíssimo no standalone
  imports: [RouterOutlet, PainelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'residencia-BB';
}
