import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { EvenementListComponent } from './components/evenement/evenement-list/evenement-list.component';
import { AddEvenementComponent } from './components/evenement/add-evenement/add-evenement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GebiedListComponent } from './components/gebied/gebied-list/gebied-list.component';
import { AddGebiedComponent } from './components/gebied/add-gebied/add-gebied.component';
import { AuthGuard } from './components/user/auth.guard';
import { GebiedDetailComponent } from './components/gebied/gebied-detail/gebied-detail.component';
import { RankingListComponent } from './components/ranking/ranking-list/ranking-list.component';
import { AddRankingComponent } from './components/ranking/add-ranking/add-ranking.component';
import { RemoveEvenementComponent } from './components/evenement/remove-evenement/remove-evenement.component';
import { RemoveGebiedComponent } from './components/gebied/remove-gebied/remove-gebied.component';
import { RemoveRankingComponent } from './components/ranking/remove-ranking/remove-ranking.component';

const appRoutes: Routes = [
  //evenementen
  { path: 'evenement-list', component: EvenementListComponent },
  {
    path: 'add-evenement',
    canActivate: [AuthGuard],
    component: AddEvenementComponent
  },
  {
    path: 'evenement-list/remove-evenement/:id', 
    canActivate: [AuthGuard],
    component: RemoveEvenementComponent},

  //gebieden
  { path: 'gebied-list', component: GebiedListComponent },
  {
    path: 'add-gebied',
    canActivate: [AuthGuard],
    component: AddGebiedComponent
  },
  {path: 'evenement-list/gebied-detail/:id', component: GebiedDetailComponent},
  {path: 'ranking-list/gebied-detail/:id', component: GebiedDetailComponent},
  {
    path: 'gebied-list/remove-gebied/:id', 
    canActivate: [AuthGuard],
    component: RemoveGebiedComponent},

  //rankings
  {path: 'ranking-list', component: RankingListComponent},
  {
    path: 'add-ranking',
    canActivate: [AuthGuard],
    component: AddRankingComponent
  },
  {
    path: 'ranking-list/remove-ranking/:id', 
    canActivate: [AuthGuard],
    component: RemoveRankingComponent},


  //overige
  { path: '', redirectTo: 'evenement-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes,
      {preloadingStrategy: PreloadAllModules})
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
