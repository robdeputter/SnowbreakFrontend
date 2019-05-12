import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RankingDataService } from 'src/app/data-services/ranking-data.service';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { Gebied, GebiedRankingPositieDTO } from 'src/app/models/gebied.model';
import { RankingDTO } from 'src/app/models/ranking.model';
import {  FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

// function validatieVoorUniekeGebieden(gebied: FormGroup): { [key: string]: any } {
//   var gebiedId: string = gebied.get("gebiedId").value;
//   var geselecteerdeGebieden : Number[] = this.gebieden();
//   var duplicaten = geselecteerdeGebieden.filter(id => id === parseInt(gebiedId));
//   if(duplicaten.length !== 0){
//     return {gebiedAlGekozen : true};
//   }
//   else{
//     return null;
//   }
// }

@Component({
  selector: 'app-add-ranking',
  templateUrl: './add-ranking.component.html',
  styleUrls: ['./add-ranking.component.css']
})
export class AddRankingComponent implements OnInit {

  @Output() public newRanking = new EventEmitter<RankingDTO>();
  public gebiedenSelectList : Gebied[];
  public ranking: FormGroup;
  public positie : number = 2;

  public _errorMessage : string;

  constructor(private _rankingDataService: RankingDataService,
    private _gebiedDataService : GebiedDataService,
    private fb : FormBuilder,
    private _router : Router) {
      _gebiedDataService.gebieden$.subscribe(res => this.gebiedenSelectList = res);
     }

     get gebieden(): FormArray {
      return <FormArray>this.ranking.get('gebieden');
    }

  ngOnInit() {
    this.ranking = this.fb.group({
      naam: ["",
      [Validators.required, Validators.minLength(2)]],
      gebieden : this.fb.array([this.createGebiedenDefault()])
    });

  }

  pushToGebieden(rankingGebiedId: HTMLOptionElement){
    console.log(this.positie);
    if(this.positie > 0 && this.positie <= 10){
      if(rankingGebiedId.value !== null){
        this.gebieden.push(this.createGebieden());
        this.positie += 1;
      }
      
    }
  }

  getErrorMessage(errors: any){
    if(errors.gebiedAlGekozen){
      return "Gebied is al gekozen!";
    }
  }

  onSubmit(){
    let gebieden = this.ranking.value.gebieden.map(GebiedRankingPositieDTO.fromJSON);
    this
    ._rankingDataService.addNewRanking(new RankingDTO(this.ranking.value.naam, gebieden)).subscribe((response) => {
        if (response){
          this._router.navigate(['ranking-list']);
        }
        else{
          this._errorMessage = "De ranking kon niet worden toegevoegd!";
        }
      });
  }

  createGebieden() : FormGroup {
    return this.fb.group(
      {
        gebiedId: [''],
        positie: [this.positie]
      }
      // ,{validator: validatieVoorUniekeGebieden}
      );
  }

  createGebiedenDefault() : FormGroup{
    return this.fb.group(
      {
        gebiedId : [''],
        positie: [1]
      }
      //,{validator: validatieVoorUniekeGebieden}
    );
  }
}
