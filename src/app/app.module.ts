import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { EvenementModule } from './components/evenement/evenement.module';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { GebiedComponent } from './components/gebied/gebied.component';
import { AddGebiedComponent } from './components/gebied/add-gebied/add-gebied.component';
import { GebiedListComponent } from './components/gebied/gebied-list/gebied-list.component';
import { GebiedFilterPipe } from './filters/gebied-filter.pipe';
import { UserModule } from './components/user/user.module';
import { httpInterceptorProviders } from './interceptors/index';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageNotFoundComponent,
    GebiedComponent,
    AddGebiedComponent,
    GebiedListComponent,
    GebiedFilterPipe
  ],
  imports: [
    BrowserModule,
    EvenementModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    AppRoutingModule
    
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
