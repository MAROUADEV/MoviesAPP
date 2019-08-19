import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ServiceMoviesProvider } from '../../providers/service-movies/service-movies';
import { TvdetailsPage } from '../tvdetails/tvdetails';
import { searchTvPage } from '../search-tv/search-tv';


@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html'
})
export class tvPage {
      tv: string = "airing-today";
      ats: any;
      pss: any;
      trs: any;
  constructor(public navCtrl: NavController,private _service: ServiceMoviesProvider) {

  }
ngOnInit(){
    this.getAiringToday();
    this.getPopularShows();
    this.getTopRatedShows();
}


 getAiringToday(){
    this._service.getAiringToday().subscribe(response => {
        this.ats = response.results;
    });
}

tvDetails(id){ 
  var tid = id;
        this.navCtrl.push(TvdetailsPage,{
  param1: tid});
    }

 getPopularShows(){
    this._service.getPopularShows().subscribe(response => {
        this.pss = response.results;
    });
}
 getTopRatedShows(){
    this._service.getTopRatedShows().subscribe(response => {
        this.trs = response.results;
    });
}
    
    doRefresh(refresher) {
    setTimeout(() => {
    this.getAiringToday();
    this.getPopularShows();
    this.getTopRatedShows();
      refresher.complete();
    }, 2000);
  }
  search()
  {
      this.navCtrl.push(searchTvPage);
  }
}
