import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { Stadium } from '../interfaces/stadium.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { StadiumStoreService } from '../services/stadium-store.service';
import { StadiumService } from '../services/stadium.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  displayedColumns: string[] = ['USE_POP', 'TEAM','LEAGUE', 'DIVISION', 'ROOF_TYPE'];
  dataSource: MatTableDataSource<Stadium>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  // @Input() stadiums: Observable<Array<Stadium>>;
  // @Input() isUserPage: boolean;
  // @Output() deleteEvent = new EventEmitter<number>()
  constructor(private storeService: StadiumStoreService, private stadiumService: StadiumService) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.storeService.stadiums$ .subscribe(val => {
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
}
}
