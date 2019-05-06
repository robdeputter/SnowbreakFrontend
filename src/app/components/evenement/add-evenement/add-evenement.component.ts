import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evenement } from 'src/app/models/evenement.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';
import { Gebied } from 'src/app/models/gebied.model';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { async } from 'rxjs/internal/scheduler/async';
import { EvenementDTO } from 'src/app/models/evenementDTO.model';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  @Output() public newEvenement = new EventEmitter<EvenementDTO>();
  public evenement: FormGroup;
  public gebieden : Gebied[];

  constructor(private fb: FormBuilder, 
    private _evenementDataService: EvenementDataService,
    private _gebiedDataService : GebiedDataService) {
      _gebiedDataService.gebieden$.subscribe(res => this.gebieden = res);
   }

  ngOnInit() {
    this.evenement = this.fb.group({
      naam: ["",
      [Validators.required, Validators.minLength(2)]],
      beschrijving: [""],
      startdatum: [""],
      einddatum: [""],
      gebiedId : [null]
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
    console.log(this.evenement.value.gebiedId);
    this._evenementDataService.addNewEvenement(new EvenementDTO(this.evenement.value.naam,this.evenement.value.beschrijving, 
      new Date(this.evenement.value.startdatum),new Date(this.evenement.value.einddatum), this.evenement.value.gebiedId)).subscribe();
  }

  addEvenement(evenementNaam: HTMLInputElement, evenementBeschrijving: HTMLInputElement,
    evenementStartdatum: HTMLInputElement, evenementEinddatum: HTMLInputElement,
    evenementGebiedId: HTMLOptionElement){

    const evenement = new EvenementDTO(evenementNaam.value,
      evenementBeschrijving.value,
      new Date(evenementStartdatum.value), 
      new Date(evenementEinddatum.value),
      parseInt(evenementGebiedId.value));
    
    this.newEvenement.emit(evenement);
  }

}
