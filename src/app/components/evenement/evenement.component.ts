import { Component, OnInit, Input } from '@angular/core';
import { Evenement } from '../../models/evenement.model';
import { EvenementDataService } from 'src/app/data-services/evenement-data.service';
import { Observable } from "rxjs";

import { EvenementDTO } from 'src/app/models/evenementDTO.model';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  @Input() public evenement: Evenement;
  title = "Overzicht evenementen";

  private _fetchEvenementen$: Observable<Evenement[]> = this._evenementDataService.evenementen$;

  constructor(private _evenementDataService: EvenementDataService) {
  }
  get evenementen$(): Observable<Evenement[]> {
    return this._fetchEvenementen$;
  }
  addEvenement(evenement : EvenementDTO){
    this._evenementDataService.addNewEvenement(evenement).subscribe();
  }

  deleteEvenement(evenementId: Number){
    this._evenementDataService.deleteEvenement(evenementId).subscribe();
  }

  ngOnInit() {
  }

}
