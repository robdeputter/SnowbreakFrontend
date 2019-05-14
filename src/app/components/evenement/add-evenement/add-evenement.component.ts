import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evenement } from 'src/app/models/evenement.model';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';
import { Gebied } from 'src/app/models/gebied.model';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { EvenementDTO } from 'src/app/models/evenementDTO.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  @Output() public newEvenement = new EventEmitter<EvenementDTO>();
  public evenement: FormGroup;
  public gebieden: Gebied[];

  private _errorMessage: string;

  constructor(private fb: FormBuilder,
    private _evenementDataService: EvenementDataService,
    private _gebiedDataService: GebiedDataService,
    private _router: Router) {
    _gebiedDataService.gebieden$.subscribe(res => this.gebieden = res);
  }

  ngOnInit() {
    this.evenement = this.fb.group({
      naam: ["",
        [Validators.required, Validators.minLength(2)]],
      beschrijving: ["", [Validators.required, Validators.minLength(5)]],
      startdatum: ["", Validators.required],
      einddatum: ["", Validators.required],
      gebiedId: [null, Validators.required]
    }, { validators: [this.startdatumVoorEinddatum, this.startdatumVerleden, this.einddatumVerleden] });
  }

  startdatumVoorEinddatum(control: AbstractControl): { [key: string]: any } {
    let startdatum: string = "";
    let einddatum: string = "";
    if (control.get("startdatum").value !== "" && control.get("einddatum").value !== "") {
      startdatum = new Date(control.get("startdatum").value).toISOString();
      einddatum = new Date(control.get("einddatum").value).toISOString();
      return startdatum <= einddatum ? null : { einddatumNotValid: true };
    }
    return null;
  }

  startdatumVerleden(control: AbstractControl): { [key: string]: any } {
    let startdatum: string = "";
    if (control.get("startdatum").value !== "") {
      startdatum = new Date(control.get("startdatum").value).toISOString();
      const vandaag = new Date().toISOString();
      return vandaag <= startdatum ? null : { startdatumInVerleden: true };
    }
    return null;

  }

  einddatumVerleden(control: AbstractControl): { [key: string]: any } {
    let einddatum : string = "";
    if(control.get("einddatum").value !== ""){
      einddatum = new Date(control.get("einddatum").value).toISOString();
      const vandaag = new Date().toISOString();
      return vandaag <= einddatum ? null : { eindatumInHetVerleden: true };
    }
    return null;
    
    
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is verplicht'
    }
    else if (errors.minLength) {
      return `heeft minstens ${errors.minlength.requiredLength} (heeft ${errors.minlength.actualLength})`
    }
    else if (errors.einddatumNotValid) {
      return "Einddatum moet na de startdatum liggen!";
    }
    else if (errors.startdatumInVerleden) {
      return "Startdatum mag niet in het verleden liggen!";
    }
    else if (errors.eindatumInHetVerleden) {
      return "Einddatum mag niet in het verleden liggen!";
    }
  }

  onSubmit() {
    console.log(this.evenement.value.gebiedId);
    this._evenementDataService.addNewEvenement(new EvenementDTO(this.evenement.value.naam, this.evenement.value.beschrijving,
      new Date(this.evenement.value.startdatum), new Date(this.evenement.value.einddatum), this.evenement.value.gebiedId))
      .subscribe((response) => {
        if (response) {
          this._router.navigate(["evenement-list"]);
        }
        else {
          this._errorMessage = "Het evenement kon niet worden toegevoegd!";
        }
      });
  }

  addEvenement(evenementNaam: HTMLInputElement, evenementBeschrijving: HTMLInputElement,
    evenementStartdatum: HTMLInputElement, evenementEinddatum: HTMLInputElement,
    evenementGebiedId: HTMLOptionElement) {

    const evenement = new EvenementDTO(evenementNaam.value,
      evenementBeschrijving.value,
      new Date(evenementStartdatum.value),
      new Date(evenementEinddatum.value),
      parseInt(evenementGebiedId.value));

    this.newEvenement.emit(evenement);
  }

}
