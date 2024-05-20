import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private apiURL = 'https://swapi.dev/api/';
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/planets`);
  }
  getResident(url:any): Observable<any> {
    console.log(url);
    return this.http.get<any>(url);
  }
}
