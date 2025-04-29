import { Component } from '@angular/core';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';
import { HeaderComponent } from '../Components/header/header.component';
import { DashboardContentComponent } from '../Components/dashboard-content/dashboard-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, DashboardContentComponent],
  template: `
    <div class="container">
      <app-sidebar (selected)="onMenuChange($event)" />

      <div class="main">
        <app-header [title]="selectedSection" />
        <app-dashboard-content *ngIf="selectedSection === 'Painel'" />
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
    }
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class PainelComponent {
  selectedSection = 'Painel';

  onMenuChange(section: string) {
    this.selectedSection = section;
  }
}
