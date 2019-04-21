import { Component, OnInit, Input} from '@angular/core';
import { Evenement } from '../../modules/evenement.module';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
   @Input() public evenement: Evenement;



  constructor() { 
    
  }
  

  ngOnInit() {
  }

}
