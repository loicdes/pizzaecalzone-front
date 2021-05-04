import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Commande } from '../models/commande';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['_id', 'prix', 'date', 'modeDePaiement', 'produits'];
  dataSource = new MatTableDataSource<Commande>([]);

  @ViewChild(MatPaginator, undefined) paginator: MatPaginator;
  @ViewChild(MatSort, undefined) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getCommandes().subscribe(commandes => {
      this.dataSource = new MatTableDataSource<Commande>(commandes);
    });
  }

}
