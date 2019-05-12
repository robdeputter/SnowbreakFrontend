import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

import { AuthenticationService } from '../components/user/authentication.service';
import { Ranking, RankingDTO } from '../models/ranking.model';
import { environment } from 'src/environments/environment.prod';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingDataService {
  public loadingError$ = new Subject<string>();
  public _rankingId : Number;

  constructor(private http: HttpClient, private _authenticationService:  AuthenticationService) { 
  }

  get rankings$(): Observable<Ranking[]> {
    return this.http.get(`${environment.apiUrl}/Ranking`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      tap((x: any[]) => {
        for (const y of x) {
          console.log(y);
        }
      }),
      map((list: any[]): Ranking[] => list.map(Ranking.fromJSON))
    );
  }

  isUserLoggedIn(): boolean {
    return this._authenticationService.token != null&&this._authenticationService.token != "";
  }

  addNewRanking(ranking : RankingDTO) : Observable<Ranking>{
    return this.http.post(`${environment.apiUrl}/Ranking`, 
      ranking.toJSON())
      .pipe(
        map(
          (rankingJSON: any): Ranking => Ranking.fromJSON(rankingJSON)
        )
      );;
  }

  deleteRanking(rankingId: Number) : Observable<Ranking>{
    return this.http.delete(`${environment.apiUrl}/Ranking/${rankingId}`)
    .pipe(map(
      (rankingJSON: any): Ranking => Ranking.fromJSON(rankingJSON)
    ));

  }

  
}
