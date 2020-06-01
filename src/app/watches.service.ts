import {Injectable} from '@angular/core';
import {Watch} from "./watch";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WatchesService {
  constructor(private http:HttpClient) { }
  url: string = "http://localhost:3001/api"

  add(watch: Watch): Observable<Watch> {
    return this.http.post<Watch>(this.url + '/post', watch);
  }
  update(watch: Watch): Observable<Watch> {
    return this.http.put<Watch>(this.url + '/update', watch);
  }
  delete(watch: Watch): Observable<Watch> {
    return this.http.delete<Watch>(this.url + '/delete/' + watch.model);
  }
  getAll(): Observable<Watch[]> {
    return this.http.get<Watch[]>(this.url + '/get-all');
  }
}
