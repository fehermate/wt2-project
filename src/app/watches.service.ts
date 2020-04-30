import {Injectable} from '@angular/core';
import {Watch} from "./watch";

@Injectable({
  providedIn: 'root'
})
export class WatchesService {
  constructor() { }

  getWatches(filters: string[] = []): Watch[] {
    let dbString : string;

    if(filters.length == 0) {
      //return all
      dbString = "*";
    } else if(filters.length == 1) {
      dbString = filters[0];
    } else {
      dbString = filters.join(", ");
    }

    return this.getWatchesFromDb(dbString);
  }

  getWatchesFromDb(queryString: string): Watch[] {
    let mockWatches: Watch[];
    mockWatches = [
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
    return mockWatches;
  }
}
