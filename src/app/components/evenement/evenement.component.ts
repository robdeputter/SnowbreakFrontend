import { Component, OnInit, Input } from '@angular/core';
import { Evenement } from '../../models/evenement.model';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';
import { Subject, Observable } from "rxjs";
import { distinctUntilChanged, debounceTime,
  map, filter } from 'rxjs/operators';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { Gebied } from 'src/app/models/gebied.model';
import { EvenementDTO } from 'src/app/models/evenementDTO.model';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  @Input() public evenement: Evenement;
  title = "Overzicht evenementen";
  public filterEvenementNaam: string;
  public filterEvenement$ = new Subject<string>();

  private _fetchEvenementen$: Observable<Evenement[]> = this._evenementDataService.evenementen$;

  constructor(private _evenementDataService: EvenementDataService, private _gebiedDataService : GebiedDataService) {

    this.filterEvenement$
    .pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map(val => val.toLowerCase()),
      filter(val => !val.startsWith('s'))
    ).subscribe(
      val => this.filterEvenementNaam = val);

  }
  applyFilter(filter : string){
    this.filterEvenementNaam = filter;
  }
  get evenementen$(): Observable<Evenement[]> {
    return this._fetchEvenementen$;
  }
  addEvenement(evenement : EvenementDTO){
    this._evenementDataService.addNewEvenement(evenement).subscribe();
  }

  ngOnInit() {
    
  }

}
