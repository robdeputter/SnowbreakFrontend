import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { Gebied } from 'src/app/models/gebied.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gebied',
  templateUrl: './add-gebied.component.html',
  styleUrls: ['./add-gebied.component.css']
})
export class AddGebiedComponent implements OnInit {
  @Output() public newGebied = new EventEmitter<Gebied>();
  public gebied: FormGroup;
  private _errorMessage : string;
  constructor(private fb: FormBuilder,
    private _gebiedDataService : GebiedDataService,
    private _router : Router) { }

  ngOnInit() {
    this.gebied = this.fb.group({
      naam: ["",
      [Validators.required, Validators.minLength(2)]],
      land: [""],
      lengtegraad: [""],
      breedtegraad: [""],
      aantalKmPiste : [null],
      hoogteGebied : [null],
      continentId: [null]
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
    this._gebiedDataService.addNewGebied(new Gebied(this.gebied.value.naam,this.gebied.value.land,
      this.gebied.value.continentId, this.gebied.value.lengtegraad, this.gebied.value.breedtegraad,
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
