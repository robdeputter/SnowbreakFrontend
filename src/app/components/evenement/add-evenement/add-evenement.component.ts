import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evenement } from 'src/app/models/evenement.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';
import { Gebied } from 'src/app/models/gebied.model';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  @Output() public newEvenement = new EventEmitter<Evenement>();
  public evenement: FormGroup;
  public gebieden : Gebied[];
  constructor(private fb: FormBuilder, private _evenementDataService: EvenementDataService, private _gebiedDataService : GebiedDataService) {
      _gebiedDataService.gebieden$.subscribe(res => this.gebieden = res);
   }

  ngOnInit() {
    this.evenement = this.fb.group({
      naam: ["",
      [Validators.required, Validators.minLength(2)]],
      beschrijving: [""],
      startdatum: [""],
      einddatum: [""],
      gebiedId: [""]
    });
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
    var observableGebied = this._gebiedDataService.getGebied$(this.evenement.value.gebiedId);
    let gebied : Gebied;
    observableGebied.subscribe(res => gebied = res);
    this._evenementDataService.addNewEvenement(new Evenement(0,this.evenement.value.naam,this.evenement.value.beschrijving, this.evenement.value.startdatum,this.evenement.value.einddatum, this.evenement.value.einddatum - this.evenement.value.startdatum, gebied)).subscribe();
  }

  addEvenement(evenementNaam: HTMLInputElement, evenementBeschrijving: HTMLInputElement,
    evenementStartdatum: HTMLInputElement, evenementEinddatum: HTMLInputElement, evenementGebiedId: HTMLOptionElement) {
    let gebied : Gebied;
    console.log(this._gebiedDataService.getGebied$(parseInt(evenementGebiedId.value)));
    this._gebiedDataService.getGebied$(parseInt(evenementGebiedId.value)).subscribe(res => gebied = res);
    const evenement = new Evenement(0, evenementNaam.value, evenementBeschrijving.value, evenementStartdatum.valueAsDate, evenementEinddatum.valueAsDate, evenementEinddatum.valueAsDate - evenementStartdatum.valueAsDate, gebied);
    
    console.log(evenementNaam.value);
    console.log(evenementBeschrijving.value);
    console.log(evenementStartdatum.value);
    console.log(evenementEinddatum.value);
    console.log(gebied);
    this.newEvenement.emit(evenement);
  }

}
