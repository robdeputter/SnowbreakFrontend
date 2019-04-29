import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementListComponent } from './components/evenement/evenement-list/evenement-list.component';
import { AddEvenementComponent } from './components/evenement/add-evenement/add-evenement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GebiedListComponent } from './components/gebied/gebied-list/gebied-list.component';
import { AddGebiedComponent } from './components/gebied/add-gebied/add-gebied.component';

const appRoutes: Routes = [
  { path: 'evenement-list', component: EvenementListComponent },
  { path: 'add-evenement', component: AddEvenementComponent },
  { path: 'gebied-list', component: GebiedListComponent },
  { path: 'add-gebied', component: AddGebiedComponent },
  { path: '', redirectTo: 'evenement-list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
