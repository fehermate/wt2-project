import {Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { WatchesService } from "../watches.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
//import {Watch} from "../watch";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class WatchComponent implements OnInit {
  watches: Watch[];
  dataSource =  new MatTableDataSource(DATA);
  columnsToDisplay = ["price", "brand", "model", "gender", "movement", "caseMaterial", "delete"];
  expandedWatch: Watch | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //constructor(service: WatchesService) {
  //  this.watches = service.getWatches();
  //}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(watch: Watch) {
    //console.log(model);
    const index = this.dataSource.data.indexOf(watch);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

}

export interface Watch {
  price: number,
  brand: string,
  model: string,
  gender: string,
  movement: string,
  caseMaterial: string
}

const DATA: Watch[] = [
  {
    price: 250.0,
    brand: "brand",
    model: "model",
    gender: "F",
    movement: "automatic",
    caseMaterial: "steel"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
  {
    price: 500.0,
    brand: "brand2",
    model: "model2",
    gender: "M",
    movement: "quartz",
    caseMaterial: "plastic"
  },
];
