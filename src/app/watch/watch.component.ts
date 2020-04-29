import { Component, OnInit } from '@angular/core';
import { WatchesService } from "../watches.service";
import {Watch} from "../watch";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  watches: Watch[];

  constructor(service: WatchesService) {
    this.watches = service.getWatches();
  }

  ngOnInit(): void {
  }

}
