import { Component, OnInit } from '@angular/core';
import { GebiedDataService } from 'src/app/data-services/gebied-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-gebied',
  templateUrl: './remove-gebied.component.html',
  styleUrls: ['./remove-gebied.component.css']
})
export class RemoveGebiedComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _errorMessage: string;

  constructor(
    private _gebiedDataService: GebiedDataService,
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
      this._gebiedDataService.deleteGebied(this._id)
        .subscribe((response) => {
          if (response) {
            this._router.navigate(['gebied-list']);
          } else {
            this._errorMessage = 'Kon het gebied niet verwijderen';
          }
        })
    }
  
    getErrorMessage() {
      return this._errorMessage;
    }

  ngOnInit() {
  }

}
