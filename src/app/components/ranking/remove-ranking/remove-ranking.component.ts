import { Component, OnInit } from '@angular/core';
import { RankingDataService } from 'src/app/data-services/ranking-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-ranking',
  templateUrl: './remove-ranking.component.html',
  styleUrls: ['./remove-ranking.component.css']
})
export class RemoveRankingComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _errorMessage: string;

  constructor(
    private _rankingDataService: RankingDataService,
    private _router: Router,
    private _route: ActivatedRoute) {
      
    this._subscription = this._route.params.subscribe(params => {
      this._id = +params['id'];
    });

  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._id = 0;
  }

  onSubmit() {
    this._rankingDataService.deleteRanking(this._id)
      .subscribe((response) => {
        if (response) {
          this._router.navigate(['ranking-list']);
        } else {
          this._errorMessage = 'Kon de ranking niet verwijderen';
        }
      })
  }

  getErrorMessage() {
    return this._errorMessage;
  }

  ngOnInit() {
  }

}
