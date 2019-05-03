import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gebied } from '../models/gebied.model';
import { environment } from 'src/environments/environment.prod';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GebiedDataService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  get gebieden$(): Observable<Gebied[]> {
    return this.http.get(`${environment.apiUrl}/Gebied/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      tap((x: any[]) => {
        for (const y of x) {
          console.log(y);
        }
      }),
      map((list: any[]): Gebied[] => list.map(Gebied.fromJSON))
    );

  }
  getGebied$(id): Observable<Gebied> {
    return this.http
      .get(`${environment.apiUrl}/Gebied/${id}`)
      .pipe(map((rec: any): Gebied => Gebied.fromJSON(rec)));
  }

  addNewEvenement(gebied : Gebied){
    return this.http.post(`${environment.apiUrl}/Gebied/`, 
      gebied.toJSON());
  }
}
