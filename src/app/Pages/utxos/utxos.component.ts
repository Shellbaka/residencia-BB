import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExportModalComponent } from '../../Components/export-modal/export-modal.component'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-utxos',
  standalone: true,
  imports: [CommonModule, FormsModule, ExportModalComponent, RouterModule],
  templateUrl: './utxos.component.html',
  styleUrls: ['./utxos.component.css']
})
export class UtxosComponent {
  searchTerm: string = ''; 
  showExportModal: boolean = false;


  utxos = [
    { txid: 'c47e89c3...', index: 0, value: 0.4, address: 'bc1qf2n9f...', script: 'OP_HASH10' },
    { txid: '839a0a97...', index: 1, value: 0.2, address: 'bc1qvas454...', script: 'OP_EQUAL' },
    { txid: '5e738ead...', index: 0, value: 0.05, address: 'bc1qsh1k9...', script: 'OP_CHECKSIG' },
    { txid: '44189f37...', index: 1, value: 0.025, address: 'bc1p3um0...', script: 'OP_0' },
  ];

 
  filteredUTXOs() {
    return this.utxos.filter(utxo =>
      JSON.stringify(utxo).toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  openExportModal() {
    this.showExportModal = true;
  }


  closeExportModal() {
    this.showExportModal = false;
  }

 
  exportUTXOs(format: string) {
    const data = this.utxos;
    if (format === 'csv') {
      const csvContent = 'Transação,Índice,Valor,Endereço,Script\n' +
        data.map(u => `${u.txid},${u.index},${u.value},${u.address},${u.script}`).join('\n');
      this.downloadFile(csvContent, 'utxos.csv', 'text/csv');
    } else if (format === 'json') {
      this.downloadFile(JSON.stringify(data, null, 2), 'utxos.json', 'application/json');
    }
    this.showExportModal = false;
  }


  downloadFile(content: string, filename: string, type: string) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
