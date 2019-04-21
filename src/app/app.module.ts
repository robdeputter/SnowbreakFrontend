import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule , MatInputModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddEvenementComponent } from './components/add-evenement/add-evenement.component';
import { EvenementFilterPipe } from './filters/evenement-filter.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EvenementComponent,
    NavbarComponent,
    AddEvenementComponent,
    EvenementFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
