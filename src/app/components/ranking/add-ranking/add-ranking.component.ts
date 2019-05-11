import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RankingDataService } from 'src/app/data-services/ranking-data.service';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { Gebied, GebiedRankingPositieDTO } from 'src/app/models/gebied.model';
import { RankingDTO } from 'src/app/models/ranking.model';
import {  FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  constructor(private _rankingDataService: RankingDataService,
    private _gebiedDataService : GebiedDataService,
    private fb : FormBuilder) {
      _gebiedDataService.gebieden$.subscribe(res => this.gebiedenSelectList = res);
     }

     get gebieden(): FormArray {
      return <FormArray>this.ranking.get('gebieden');
    }

  ngOnInit() {
    this.ranking = this.fb.group({
      naam: ["",
      [Validators.required, Validators.minLength(2)]],
      continent : [null, Validators.required],
      gebieden : this.fb.array([this.createGebiedenDefault()])
    });

    // this.gebieden.valueChanges
    //   .pipe(
    //     debounceTime(400),
    //     distinctUntilChanged()
    //   )
    //   .subscribe(gebList => {
    //     // if the last entry's name is typed, add a new empty one
    //     // if we're removing an entry's name, and there is an empty one after that one, remove the empty one
    //     const lastElement = gebList[gebList.length - 1];

    //     if (lastElement.positie > 0 && lastElement.positie <= 10 && !lastElement.gebiedId) {
    //       this.gebieden.push(this.createGebieden());
    //     } else if (gebList.length >= 2) {
    //       const secondToLast = gebList[gebList.length - 2];
    //       if (
    //         !lastElement.gebiedId &&
    //         !lastElement.positie &&
    //         (!secondToLast.gebiedId || !secondToLast.positie)
    //       ) {
    //         this.gebieden.removeAt(this.gebieden.length - 1);
    //       }
    //     }
    //   });
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
    if(errors.required){
      return 'is verplicht'
    }
    else if (errors.minLength){
      return `heeft minstens ${errors.minlength.requiredLength} (heeft ${errors.minlength.actualLength})`
    }
  }

  onSubmit(){
    let gebieden = this.ranking.value.gebieden.map(GebiedRankingPositieDTO.fromJSON);
    this
    ._rankingDataService.addNewRanking(new RankingDTO(this.ranking.value.naam,
      this.ranking.value.continent, gebieden)).subscribe();
  }

  createGebieden() : FormGroup {
    return this.fb.group(
      {
        gebiedId: [''],
        positie: [this.positie]
      });
  }

  createGebiedenDefault() : FormGroup{
    return this.fb.group(
      {
        gebiedId : [''],
        positie: [1]
      }
    );
  }

  


}
