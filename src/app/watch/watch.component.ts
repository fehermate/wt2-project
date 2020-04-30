import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { WatchesService } from "../watches.service";
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
  dataSource = DATA;
  columnsToDisplay = ['Price', 'Brand', 'Model', 'Gender', 'Movement', 'Case Material'];
  expandedWatch: Watch | null;

  constructor(service: WatchesService) {
    this.watches = service.getWatches();
  }

  ngOnInit(): void {
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
];
