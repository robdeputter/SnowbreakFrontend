import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evenement } from 'src/app/modules/evenement.module';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  @Output() public newEvenement = new EventEmitter<Evenement>();
  constructor() { }

  ngOnInit() {
  }

  addEvenement(evenementNaam: HTMLInputElement, evenementBeschrijving: HTMLInputElement,
     evenementStartdatum: HTMLInputElement, evenementEinddatum: HTMLInputElement){
       const evenement = new Evenement(0, evenementNaam.value, evenementBeschrijving.value, evenementStartdatum.valueAsDate, evenementEinddatum.valueAsDate, evenementEinddatum.valueAsDate - evenementStartdatum.valueAsDate);
       console.log(evenementNaam.value);
       console.log(evenementBeschrijving.value);
       console.log(evenementStartdatum.value);
       console.log(evenementEinddatum.value);
       this.newEvenement.emit(evenement);
     }

}
