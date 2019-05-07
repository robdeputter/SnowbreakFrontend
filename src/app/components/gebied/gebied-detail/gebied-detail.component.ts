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
  public gebied : Gebied;
  constructor(private _gebiedDataService : GebiedDataService, private route : ActivatedRoute, private router : Router) {
    let id = this.router.url.substr(this.router.url.lastIndexOf("/") + 1);
    console.log(parseInt(id));
    this._gebiedDataService.getGebied$(parseInt(id)).subscribe(res => this.gebied = res);
    console.log(this.gebied);
   }

  ngOnInit() {
  }
}
