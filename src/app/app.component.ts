import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Acron {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  title = 'acronyms';

  acronyms: Acron[] = [
    { name: 'LPG', description: 'Lollipop Guild' },
    { name: 'SATCOM', description: 'Satellite Communications' },
    { name: 'PTES', description: 'Protected Tactical Enterprise Service' },
    { name: 'PTW', description: 'Protected Tactical Waveform' },
    {
      name: 'PATS',
      description: 'Protected Anti-jam Tactical Satellite Communication',
    },
  ];
  displayedColumns: string[] = ['name', 'description'];
  radioModel = 'initials';
  query = '';

  dataSource = new MatTableDataSource(this.acronyms);
  showNew = false;

  model: Acron = {
    name: 'ALEX',
    description: 'Allied Lions Elegant Xylophones',
  };

  ngOnInit(): void { this.changeFilter(); }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  changeFilter(): void {
    this.dataSource.filterPredicate = (data: Acron, filter: string) => {
      return this.radioModel === 'initials'
        ? data.name.toLowerCase().includes(filter)
        : data.name.toLowerCase().includes(filter) ||
            data.description.toLowerCase().includes(filter);
    };
  }

  applyFilter(): void {
    const filterValue = this.query.trim();
    console.log(filterValue);
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
