import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { RankingComponent } from './ranking.component';
import { RankingFilterPipe } from 'src/app/filters/ranking-filter.pipe';
import { RankingListComponent } from './ranking-list/ranking-list.component';



@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      MaterialModule,
      RouterModule
    ],
    declarations: [
      RankingComponent,
      RankingFilterPipe,
      RankingListComponent],
      
      exports: []
  })

export class RankingModule { }
