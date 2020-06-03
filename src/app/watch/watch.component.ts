import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { WatchesService } from "../watches.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Watch} from "../watch";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})


export class WatchComponent implements OnInit {
  constructor(private service: WatchesService) {}

  watches: Watch[];

  ngOnInit() {
    this.getWatches();
    this.dataSource = new MatTableDataSource(this.watches);
  }

  dataSource = new MatTableDataSource(this.watches);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  columnsToDisplay = ["price", "brand", "model", "gender", "movement", "caseMaterial", "increasePrice", "delete"];

  getWatches() {
    this.service.listWatches().subscribe((watches) => {
      this.watches = watches;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource = new MatTableDataSource(this.watches);
      this.dataSource._updateChangeSubscription();
    }, (err) => {
      alert("An error occured while getting watches : " + err.message);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(watch: Watch) {
    this.service.deleteWatch(watch).subscribe(() => {
      alert("The deletion of the watch was successful.");
      this.getWatches();
    }, (err) => {
      alert("An error occured while deleting the watch : " + err.message);
      this.getWatches();
    });
  }

  increasePrice(watch: Watch) {
    watch.price += 100;
    this.service.updateWatch(watch).subscribe(() => {
      alert("The watch price was increased to " + "$" + watch.price);
      this.getWatches();
    }, (err) => {
      alert("An error occured while increasing the watch price : " + err.message);
      this.getWatches();
    });
  }

}
