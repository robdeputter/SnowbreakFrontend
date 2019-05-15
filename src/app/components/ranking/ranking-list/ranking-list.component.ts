import { Component, OnInit, Input } from '@angular/core';
import { RankingDataService } from 'src/app/data-services/ranking-data.service';
import { Observable, Subject } from 'rxjs';
import { Ranking } from 'src/app/models/ranking.model';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';
import { Gebied } from 'src/app/models/gebied.model';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {
  public filterRankingNaam: string;
  public filterRanking$ = new Subject<string>();
  private _fetchGebieden : Observable<Ranking[]> = this._rankingDataService.rankings$;


  public loadingError$ = this._rankingDataService.loadingError$;
  constructor(private _rankingDataService : RankingDataService, private _gebiedDataService : GebiedDataService) {
    this.filterRanking$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase()),
        filter(val => !val.startsWith(' '))
      ).subscribe(
        val => this.filterRankingNaam = val);
   }

   applyFilter(filter: string) {
    this.filterRankingNaam = filter;
  }

  get rankings$() : Observable<Ranking[]>{
    console.log(this._fetchGebieden);
    return this._fetchGebieden;
  }

  isUserLogedIn(): boolean{
    return this._rankingDataService.isUserLoggedIn();
  }
  
  ngOnInit() {
  }

}
