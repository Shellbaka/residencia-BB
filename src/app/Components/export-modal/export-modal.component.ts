import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-export-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.css']
})
export class ExportModalComponent {
  @Output() export = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  exportData(format: string) {
    this.export.emit(format);
  }

  closeModal() {
    this.close.emit();
  }
}
