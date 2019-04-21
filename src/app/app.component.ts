import { Component } from '@angular/core';
import { Evenement } from './modules/evenement.module';
import { EvenementDataService } from './data-services/evenement-data.service';
import { Subject } from "rxjs";
import { distinctUntilChanged, debounceTime,
  map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snowbreak-frontend';
  public filterEvenementNaam : string;
  public filterEvenement$ = new Subject<string>();
  constructor(private _evenementDataService : EvenementDataService){

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
  get evenementen(): Evenement[] {
    return this._evenementDataService.evenementen;
  }
  addEvenement(evenement : Evenement){
    this._evenementDataService.addNewEvenement(evenement);
  }
}
