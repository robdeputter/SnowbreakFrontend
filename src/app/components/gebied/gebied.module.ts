import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { GebiedComponent } from './gebied.component';
import { AddGebiedComponent } from './add-gebied/add-gebied.component';
import { GebiedFilterPipe } from 'src/app/filters/gebied-filter.pipe';
import { GebiedListComponent } from './gebied-list/gebied-list.component';
import { GebiedDetailComponent } from './gebied-detail/gebied-detail.component';
import { RemoveGebiedComponent } from './remove-gebied/remove-gebied.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      MaterialModule,
      RouterModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyACVcWm0Ef3RrWceKUBMDAnc9Rs11OjwyY' 
      })
    ],
    declarations: [
      GebiedComponent,
      AddGebiedComponent,
      GebiedFilterPipe,
      GebiedListComponent,
      GebiedDetailComponent,
      RemoveGebiedComponent],
      
      exports: [
        MaterialModule,
        AgmCoreModule
      ]
  })

export class GebiedModule { }
