import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { EvenementModule } from './components/evenement/evenement.module';
import { UserModule } from './components/user/user.module';
import { httpInterceptorProviders } from './interceptors/index';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { GebiedModule } from './components/gebied/gebied.module';
import { RankingModule } from './components/ranking/ranking.module';
import { AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    EvenementModule,
    RankingModule,
    GebiedModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACVcWm0Ef3RrWceKUBMDAnc9Rs11OjwyY' 
    })
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
