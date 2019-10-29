import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecklistComponent } from './tab1/pagesmasterduel/decklist/decklist.component';
import { MycardlistComponent } from './tab1/pagesmasterduel/mycardlist/mycardlist.component';
import { BanlistComponent } from './tab1/pagesmasterduel/banlist/banlist.component';
import { SelectedcardComponent } from './tab1/pagesmasterduel/selectedcard/selectedcard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  AppComponent,
  DecklistComponent,
  MycardlistComponent,
  BanlistComponent,
  SelectedcardComponent
],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
