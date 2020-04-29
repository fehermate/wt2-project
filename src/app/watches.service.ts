import { Injectable } from '@angular/core';
import {Watch} from "./watch";

@Injectable({
  providedIn: 'root'
})
export class WatchesService {
  constructor() { }

  getWatches(): Watch[] {
    return []
  }
}
