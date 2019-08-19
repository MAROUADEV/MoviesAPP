import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ServiceMoviesProvider } from '../../providers/service-movies/service-movies';

import { MoviesDetailsPage } from '../movies-details/movies-details';

import { SearchPage } from '../search/search';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html'
})
export class HomePage {

    all_movies: string = "now-playing";
    nowPlaying: any;
    upComing: any;
    topRated:any;
    popular:any;

  constructor(public navCtrl: NavController, private _service: ServiceMoviesProvider) {
    
  }
ngOnInit(){
    this.getNowplaying();
    this.getUpComing();
    this.getTopRated();
    this.getPopular();
}

getNowplaying(){
    this._service.getNowplaying().subscribe(response => {
        this.nowPlaying = response.results;
    });
}
getUpComing(){
    this._service.getUpComing().subscribe(response => {
        this.upComing = response.results;
    });
}

getTopRated(){
  this._service.get_topRated().subscribe(response => {
      this.topRated = response.results;
  });
}

getPopular(){
  this._service.get_Popular().subscribe(response => {
      this.popular = response.results;
  });
}
    doRefresh(refresher) 
    {
      setTimeout(() => {
      this.getNowplaying();
      this.getUpComing();
      this.getTopRated();
      this.getPopular();
        refresher.complete();
      }, 2000);
    }

movieDetails(id)
{
  var mid = id;
  this.navCtrl.push(MoviesDetailsPage,{param1: mid});
}
       
search()
{
  this.navCtrl.push(SearchPage);
}

}
