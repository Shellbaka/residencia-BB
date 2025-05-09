import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContentComponent } from '../Components/dashboard-content/dashboard-content.component';
import { HeaderComponent } from '../Components/header/header.component';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, DashboardContentComponent, HeaderComponent, SidebarComponent,RouterModule],
  templateUrl: './Painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent {
  selectedSection = 'Painel';

  onMenuChange(section: string) {
    this.selectedSection = section;
  }
}