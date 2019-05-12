import { Injectable } from '@angular/core';
import { Evenement } from '../models/evenement.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';
import {Subject} from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';
import { EvenementDTO } from '../models/evenementDTO.model';
import { AuthenticationService } from '../components/user/authentication.service';
import { AddEvenementComponent } from '../components/evenement/add-evenement/add-evenement.component';

@Injectable({
  providedIn: 'root'
})
export class EvenementDataService {
  public loadingError$ = new Subject<string>();
  public _evenementId : Number;

  constructor(private http: HttpClient, private _authenticationService:  AuthenticationService) { }

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

  addNewEvenement(evenement : EvenementDTO) : Observable<Evenement>{
    return this.http.post(`${environment.apiUrl}/Evenement/`, 
      evenement.toJSON())
      .pipe(
        map(
          (evenementJSON: any): Evenement => Evenement.fromJSON(evenementJSON)
        )
      );
  }

  deleteEvenement(evenemenentId: Number) : Observable<Evenement>{
    return this.http.delete(`${environment.apiUrl}/Evenement/${evenemenentId}`)
    .pipe(map(
      (evenenmentJSON: any): Evenement => Evenement.fromJSON(evenenmentJSON)
    ));
  }

  isUserLoggedIn(): boolean {
    return this._authenticationService.token != null&&this._authenticationService.token != "";
  }
}

