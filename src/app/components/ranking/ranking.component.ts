import { Component, OnInit, Input } from '@angular/core';
import { Ranking } from 'src/app/models/ranking.model';
import { Observable } from 'rxjs';
import { RankingDataService } from 'src/app/data-services/ranking-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  @Input() public ranking : Ranking;
  title = "Overzicht rankings";

  constructor( private _rankingDataService : RankingDataService, private _router : Router) {
    
  }

  isUserLoggedIn() : boolean{
    return this._rankingDataService.isUserLoggedIn();
  }
  
  ngOnInit() {
  }

}
