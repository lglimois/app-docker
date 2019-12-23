import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Regate } from '../model/regate';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegateService {

  private regatesUrl: string;

  constructor(private http: HttpClient) {
  this.regatesUrl = 'http://localhost:8080/regates';
  }

  public findAll(): Observable<Regate[]> {
   return this.http.get<Regate[]>(this.regatesUrl);
  }

  public save(regate: Regate) {
   return this.http.post<Regate>(this.regatesUrl, regate);
  }
}
