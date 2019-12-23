import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coureur } from '../model/coureur';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoureurServiceService {

  private coureursUrl: string;

  constructor(private http: HttpClient) {
    this.coureursUrl = 'http://localhost:8080/coureurs';
  }

  public findAll(): Observable<Coureur[]> {
   return this.http.get<Coureur[]>(this.coureursUrl);
 }

 public save(coureur: Coureur) {
   return this.http.post<Coureur>(this.coureursUrl, coureur);
 }

}
