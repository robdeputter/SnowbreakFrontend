import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { Gebied } from 'src/app/models/gebied.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-gebied',
  templateUrl: './add-gebied.component.html',
  styleUrls: ['./add-gebied.component.css']
})
export class AddGebiedComponent implements OnInit {
  @Output() public newGebied = new EventEmitter<Gebied>();
  public lat : Number;
  public long : Number;

  public gebied: FormGroup;
  private _errorMessage : string;
  constructor(private fb: FormBuilder,
    private _gebiedDataService : GebiedDataService,
    private _router : Router) { }

  ngOnInit() {
    this.gebied = this.fb.group({
      naam: ["",
      [Validators.required, Validators.minLength(2)]],
      land: ["",
      [Validators.required, Validators.minLength(2)]],
      lengtegraad: [this.long, Validators.required],
      breedtegraad: [this.lat, Validators.required] ,
      aantalKmPiste : [null, [Validators.required, Validators.min(1)]],
      hoogteGebied : [null, [Validators.required, Validators.min(1)]],
      continentId: [null, [Validators.required]]
    }
    , {validators : this.aangekliktInMap}
    );
  }

  aangekliktInMap(control : AbstractControl){
    
    if(control.get("lengtegraad").value === null && control.get("breedtegraad") === null){
      return  {NietAangekliktInMap : true}
    }
    return null;
  }

  getErrorMessage(errors: any){
    if(errors.required){
      return 'is verplicht'
    }
    else if (errors.minLength){
      return `heeft minstens ${errors.minlength.requiredLength} (heeft ${errors.minlength.actualLength})`
    }
    else if (errors.NietAangekliktInMap){
      return "U moet nog een plaats aanduiden op de kaart!";
    }
    else if (errors.min){
      return `moet groter zijn dan 0`;
    }
    
  }

  onMapClicked(event){
    this.lat = event.coords.lat.toFixed(5);
    this.long = event.coords.lng.toFixed(5);
    this.gebied.get("lengtegraad").setValue(this.long);
    this.gebied.get("breedtegraad").setValue(this.lat);
  }

  onSubmit(){
    this._gebiedDataService.addNewGebied(new Gebied(this.gebied.value.naam,this.gebied.value.land,
      this.gebied.value.continentId,parseFloat(this.gebied.value.lengtegraad), parseFloat(this.gebied.value.breedtegraad),
      this.gebied.value.aantalKmPiste,
      this.gebied.value.hoogteGebied)).subscribe((response) => {

        if(response){
          this._router.navigate(['gebied-list'])
        }
        else{
          this._errorMessage = "Het gebied kon niet worden toegevoegd!";
        }
      });
  }

  addGebied(gebiedNaam: HTMLInputElement, gebiedLand: HTMLInputElement,
    gebiedLengtegraad: HTMLInputElement, gebiedBreedtegraad: HTMLInputElement,
    gebiedAantalKmPiste: HTMLInputElement,gebiedHoogteGebied: HTMLInputElement,
    gebiedContinent: HTMLOptionElement){

    const gebied = new Gebied(gebiedNaam.value,gebiedLand.value,parseInt(gebiedContinent.value) ,parseFloat(gebiedLengtegraad.value),
     parseFloat(gebiedBreedtegraad.value),parseInt(gebiedAantalKmPiste.value), parseInt(gebiedHoogteGebied.value));
    this.newGebied.emit(gebied);
  }
}
