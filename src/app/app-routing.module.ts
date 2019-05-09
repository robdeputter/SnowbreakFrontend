import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementListComponent } from './components/evenement/evenement-list/evenement-list.component';
import { AddEvenementComponent } from './components/evenement/add-evenement/add-evenement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GebiedListComponent } from './components/gebied/gebied-list/gebied-list.component';
import { AddGebiedComponent } from './components/gebied/add-gebied/add-gebied.component';
import { AuthGuard } from './components/user/auth.guard';
import { GebiedDetailComponent } from './components/gebied/gebied-detail/gebied-detail.component';
import { RankingListComponent } from './components/ranking/ranking-list/ranking-list.component';

const appRoutes: Routes = [
  { path: 'evenement-list', component: EvenementListComponent },
  {
    path: 'add-evenement',
    canActivate: [AuthGuard],
    component: AddEvenementComponent
  },
  { path: 'gebied-list', component: GebiedListComponent },
  {
    path: 'add-gebied',
    canActivate: [AuthGuard],
    component: AddGebiedComponent
  },
  {path: 'evenement-list/gebied-detail/:id', component: GebiedDetailComponent},
  {path: 'ranking-list', component: RankingListComponent},
  { path: '', redirectTo: 'evenement-list', pathMatch: 'full' },
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
