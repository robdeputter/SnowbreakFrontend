import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Gebied } from 'src/app/models/gebied.model';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-gebied-list',
  templateUrl: './gebied-list.component.html',
  styleUrls: ['./gebied-list.component.css']
})
export class GebiedListComponent implements OnInit {
  public filterGebiedNaam: string;
  public filterGebied$ = new Subject<string>();
  private _fetchGebieden$: Observable<Gebied[]> = this._gebiedDataService.gebieden$;

  public loadingError$ = this._gebiedDataService.loadingError$;
  constructor(private _gebiedDataService: GebiedDataService) { 

    this.filterGebied$
    .pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map(val => val.toLowerCase()),
      filter(val => !val.startsWith(' '))
    ).subscribe(
      val => this.filterGebiedNaam = val);
  }

  applyFilter(filter : string){
    this.filterGebiedNaam = filter;
  }
  get gebieden$(): Observable<Gebied[]> {
    return this._fetchGebieden$;
  }
  addEvenement(gebied : Gebied){
    this._gebiedDataService.addNewGebied(gebied).subscribe();
  }

  isUserLogedIn() : boolean{
    return this._gebiedDataService.isUserLoggedIn();
  }

  ngOnInit() {
  }

}
