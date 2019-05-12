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
import { RemoveEvenementComponent } from './remove-evenement/remove-evenement.component';



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
      EvenementListComponent,
      RemoveEvenementComponent],
      
      exports: []
  })

export class EvenementModule { }
