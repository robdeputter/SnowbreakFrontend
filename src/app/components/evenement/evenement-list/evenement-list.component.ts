import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Evenement } from 'src/app/models/evenement.model';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {
  public filterEvenementNaam: string;
  public filterEvenement$ = new Subject<string>();
  private _fetchEvenementen$: Observable<Evenement[]> = this._evenementDataService.evenementen$;

  public loadingError$ = this._evenementDataService.loadingError$;
  constructor(private _evenementDataService: EvenementDataService) {
    this.filterEvenement$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase()),
        filter(val => !val.startsWith(' '))
      ).subscribe(
        val => this.filterEvenementNaam = val);
  }

  applyFilter(filter: string) {
    this.filterEvenementNaam = filter;
  }
  get evenementen$(): Observable<Evenement[]> {
    return this._fetchEvenementen$;
  }
  addEvenement(evenement: Evenement) {
    this._evenementDataService.addNewEvenement(evenement).subscribe();
  }

  ngOnInit() {
  }

}
