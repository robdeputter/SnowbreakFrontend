import { Component, OnInit } from '@angular/core';
import { Gebied } from 'src/app/models/gebied.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gebied-detail',
  templateUrl: './gebied-detail.component.html',
  styleUrls: ['./gebied-detail.component.css']
})
export class GebiedDetailComponent implements OnInit {
  public _id : Number;
  public _fetchGebied$ : Observable<Gebied>;
  public _subscription : any;

  constructor(
    private _gebiedDataService : GebiedDataService,
    private _route : ActivatedRoute,
    ) { 
      this._subscription = this._route.params.subscribe(
        params => {this._id = +params['id'];
        });
        console.log(this._id);
        this._gebiedDataService._gebiedId = this._id;
        this._fetchGebied$ = this._gebiedDataService.Gebied$;
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this._gebiedDataService._gebiedId = 0;
    this._fetchGebied$ = null;
  }

  get gebied$() : Observable<Gebied>{
    return this._fetchGebied$;
  }


}
