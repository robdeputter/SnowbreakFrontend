import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gebied } from '../models/gebied.model';
import { environment } from 'src/environments/environment.prod';
import { catchError, tap, map } from 'rxjs/operators';
import { AuthenticationService } from '../components/user/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GebiedDataService {
  public loadingError$ = new Subject<string>();
  public _gebiedId : Number;
  constructor(private http: HttpClient, private _authenticationService : AuthenticationService) { }

  get gebieden$(): Observable<Gebied[]> {
    return this.http.get(`${environment.apiUrl}/Gebied`).pipe(
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
  get Gebied$(): Observable<Gebied> {
    return this.http
      .get(`${environment.apiUrl}/Gebied/${this._gebiedId}`)
      .pipe(map((rec: any): Gebied => Gebied.fromJSON(rec)));
  }

  addNewGebied(gebied : Gebied) : Observable<Gebied>{
    return this.http.post(`${environment.apiUrl}/Gebied`, 
      gebied.toJSON())
      .pipe(
        map(
          (gebiedJSON: any): Gebied => Gebied.fromJSON(gebiedJSON)
        )
      );
  }


  isUserLoggedIn(): boolean {
    return this._authenticationService.token != null&&this._authenticationService.token != "";
  }

  deleteGebied(gebiedId: Number) : Observable<Gebied>{
    return this.http.delete(`${environment.apiUrl}/Gebied/${gebiedId}`)
    .pipe(map(
      (gebiedJSON: any): Gebied => Gebied.fromJSON(gebiedJSON)
    ));
  }
}
