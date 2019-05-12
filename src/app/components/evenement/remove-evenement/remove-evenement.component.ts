import { Component, OnInit } from '@angular/core';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-evenement',
  templateUrl: './remove-evenement.component.html',
  styleUrls: ['./remove-evenement.component.css']
})
export class RemoveEvenementComponent implements OnInit {
  private _id: Number;
  private _subscription: any;
  private _errorMessage: string;

  constructor(
    private _evenementDataService: EvenementDataService,
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
    this._evenementDataService.deleteEvenement(this._id)
      .subscribe((response) => {
        if (response) {
          this._router.navigate(['evenement-list']);
        } else {
          this._errorMessage = 'Kon het evenement niet verwijderen';
        }
      })
  }

  getErrorMessage() {
    return this._errorMessage;
  }

  ngOnInit() {
  }

}
