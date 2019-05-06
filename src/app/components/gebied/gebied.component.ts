import { Component, OnInit, Input } from '@angular/core';
import { Gebied } from 'src/app/models/gebied.model';
import { Subject, Observable } from 'rxjs';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';
import { GebiedDTO } from 'src/app/models/gebiedDTO.model';

@Component({
  selector: 'app-gebied',
  templateUrl: './gebied.component.html',
  styleUrls: ['./gebied.component.css']
})
export class GebiedComponent implements OnInit {
  @Input() public gebied: Gebied;
  title = "Overzicht gebieden";
  public filterGebiedNaam: string;
  public filterGebieden$ = new Subject<string>();

  private _fetchGebieden$: Observable<Gebied[]> = this._gebiedDataService.gebieden$;
  constructor(private _gebiedDataService: GebiedDataService) { 
    this.filterGebieden$
    .pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map(val => val.toLowerCase()),
      filter(val => !val.startsWith('s'))
    ).subscribe(
      val => this.filterGebiedNaam = val);
  }

  applyFilter(filter : string){
    this.filterGebiedNaam = filter;
  }
  get evenementen$(): Observable<Gebied[]> {
    return this._fetchGebieden$;
  }
  addEvenement(gebied : GebiedDTO){
    this._gebiedDataService.addNewGebied(gebied).subscribe();
  }

  ngOnInit() {
  }

}
