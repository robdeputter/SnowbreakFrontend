import { Injectable } from '@angular/core';
import { Evenement } from '../modules/evenement.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';
import {Subject} from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EvenementDataService {
  public loadingError$ = new Subject<string>();
  constructor(private http: HttpClient) { }

  get evenementen$(): Observable<Evenement[]> {
    return this.http.get(`${environment.apiUrl}/Evenement/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      tap((x: any[]) => {
        for (const y of x) {
          console.log(y);
        }
      }),
      map((list: any[]): Evenement[] => list.map(Evenement.fromJSON))
    );
  }

  addNewEvenement(evenement : Evenement){
    return this.http.post(`${environment.apiUrl}/Evenement/`, 
      evenement.toJSON());
  }
}

