import { Component, OnInit, Input } from '@angular/core';
import { Ranking } from 'src/app/models/ranking.model';
import { Observable } from 'rxjs';
import { RankingDataService } from 'src/app/data-services/ranking-data.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  @Input() public ranking : Ranking;
  title = "Overzicht rankings";

  constructor() {
   }

  
  
  ngOnInit() {
  }

}
