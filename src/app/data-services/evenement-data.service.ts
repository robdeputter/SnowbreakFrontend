import { Injectable } from '@angular/core';
import { EVENEMENTEN } from '../mock-evenements';
import { Evenement } from '../modules/evenement.module';

@Injectable({
  providedIn: 'root'
})
export class EvenementDataService {
  private _evenementen = EVENEMENTEN;

  constructor() { }

  get evenementen(): Evenement[]{
    return this._evenementen;
  }

  addNewEvenement(evenement : Evenement){
    this._evenementen.push(evenement);
  }
}

