


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Table visibility toggle
  showTable = true;

  // Active/InActive toggle
  activeTab = 'active';

  // Sample data for the table
  tableData = [
    { phm: 1206, outlier: 3480, threshold: 2300, failureDr: 2780 },
    { phm: 1305, outlier: 3620, threshold: 2400, failureDr: 2880 },
    { phm: 1100, outlier: 3300, threshold: 2200, failureDr: 2700 },
  ];

  // Toggle table visibility
  toggleTable() {
    this.showTable = !this.showTable;
  }

  // Set active/inactive tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
