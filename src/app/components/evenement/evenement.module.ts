import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EvenementComponent } from './evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { EvenementFilterPipe } from '../../filters/evenement-filter.pipe';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      MaterialModule,
      RouterModule
    ],
    declarations: [
      EvenementComponent,
      AddEvenementComponent,
      EvenementFilterPipe,
      EvenementListComponent],
      
      exports: [
        MaterialModule
      ]
  })

export class EvenementModule { }
