import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { tvPage } from '../pages/tv/tv';
import { HomePage } from '../pages/movies/movies';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceMoviesProvider } from '../providers/service-movies/service-movies';
import {HttpModule} from '@angular/http'
import { MoviesDetailsPage } from '../pages/movies-details/movies-details';
import { SearchPage } from '../pages/search/search';
import { TvdetailsPage } from '../pages/tvdetails/tvdetails';
import { searchTvPage } from '../pages/search-tv/search-tv';
import { AdMobFree } from "@ionic-native/admob-free";

@NgModule({
  declarations: [
    MyApp,
    tvPage,
    HomePage,
    TabsPage,
    MoviesDetailsPage,
    SearchPage,
    TvdetailsPage,
    searchTvPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    tvPage,
    HomePage,
    TabsPage,
    MoviesDetailsPage,
    SearchPage,
    TvdetailsPage,
    searchTvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceMoviesProvider,
    AdMobFree
  ]
})
export class AppModule {}
