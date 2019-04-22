import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evenement } from 'src/app/models/evenement.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  @Output() public newEvenement = new EventEmitter<Evenement>();
  public evenement: FormGroup;
  constructor(private fb: FormBuilder, private _evenementDataService: EvenementDataService) { }

  ngOnInit() {
    this.evenement = this.fb.group({
      naam: ["",
      [Validators.required, Validators.minLength(2)]],
      beschrijving: [""],
      startdatum: [""],
      einddatum: [""]
    }
    );
  }

  getErrorMessage(errors: any){
    if(errors.required){
      return 'is verplicht'
    }
    else if (errors.minLength){
      return `heeft minstens ${errors.minlength.requiredLength} (heeft ${errors.minlength.actualLength})`
    }
  }

  onSubmit(){
    this._evenementDataService.addNewEvenement(new Evenement(0,this.evenement.value.naam,this.evenement.value.beschrijving, this.evenement.value.startdatum,this.evenement.value.einddatum, this.evenement.value.einddatum - this.evenement.value.startdatum)).subscribe();
  }

  addEvenement(evenementNaam: HTMLInputElement, evenementBeschrijving: HTMLInputElement,
    evenementStartdatum: HTMLInputElement, evenementEinddatum: HTMLInputElement) {
    const evenement = new Evenement(0, evenementNaam.value, evenementBeschrijving.value, evenementStartdatum.valueAsDate, evenementEinddatum.valueAsDate, evenementEinddatum.valueAsDate - evenementStartdatum.valueAsDate);
    console.log(evenementNaam.value);
    console.log(evenementBeschrijving.value);
    console.log(evenementStartdatum.value);
    console.log(evenementEinddatum.value);
    this.newEvenement.emit(evenement);
  }

}
