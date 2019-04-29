import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { GebiedComponent } from './gebied.component';
import { AddGebiedComponent } from './add-gebied/add-gebied.component';
import { GebiedFilterPipe } from 'src/app/filters/gebied-filter.pipe';
import { GebiedListComponent } from './gebied-list/gebied-list.component';


@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      MaterialModule
    ],
    declarations: [
      GebiedComponent,
      AddGebiedComponent,
      GebiedFilterPipe,
      GebiedListComponent],
      
      exports: [
        MaterialModule
      ]
  })

export class EvenementModule { }
