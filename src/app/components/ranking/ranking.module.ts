import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { RankingComponent } from './ranking.component';
import { RankingFilterPipe } from 'src/app/filters/ranking-filter.pipe';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { AddRankingComponent } from './add-ranking/add-ranking.component';
import { RemoveRankingComponent } from './remove-ranking/remove-ranking.component';
import { GebiedModule } from '../gebied/gebied.module';
import { AgmCoreModule} from '@agm/core';



@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      MaterialModule,
      RouterModule,
      GebiedModule,
      AgmCoreModule.forRoot({
        apiKey: "AIzaSyACVcWm0Ef3RrWceKUBMDAnc9Rs11OjwyY"
      })
    ],
    declarations: [
      RankingComponent,
      RankingFilterPipe,
      RankingListComponent,
      AddRankingComponent,
      RemoveRankingComponent
    ],
      
      exports: []
  })

export class RankingModule { }
