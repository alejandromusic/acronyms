import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Acron {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'acronyms';

  acronyms: Acron[] = [
    { name: 'LPG', description: 'Lollipop Guild' },
    { name: 'SATCOM', description: 'Satellite Communications' },
    { name: 'PTES', description: 'Protected Tactical Enterprise Service' },
    { name: 'PTW', description: 'Protected Tactical Waveform' },
    {
      name: 'PTAS',
      description: 'Protected Tactical Anti-jam Satellite Communication',
    },
  ];
  displayedColumns: string[] = ['name', 'description'];

  dataSource = new MatTableDataSource(this.acronyms);
  showNew = false;

  model: Acron = {
    name: 'ALEX',
    description: 'Allied Lions Elegant Xylophones',
  };

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue.trim());
    this.dataSource.filter = filterValue.trim();
  }

  save(): void {
    if (this.showNew) {
      const m = { ...this.model };
      this.acronyms = [...this.acronyms, m];
      this.dataSource.data = this.acronyms;
    }

    this.showNew = !this.showNew;
  }

  update(row: Acron): void {
    this.model = row;
    this.showNew = true;
  }
}
