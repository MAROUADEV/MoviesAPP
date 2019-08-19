import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MoviesDetailsPage } from '../movies-details/movies-details';
import { ServiceMoviesProvider } from '../../providers/service-movies/service-movies';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
    sch_res: any;
    id:any;
    key:string='';
  constructor(private admobFree:AdMobFree,public navCtrl: NavController, public navParams: NavParams,private _service: ServiceMoviesProvider) {
    this.autoShowAds();
  }

  
movieDetails(id){
    var mid = id;
          this.navCtrl.push(MoviesDetailsPage,{
    param1: mid});
      }
    searchmovie(event, key)
    {
        this._service.getSearch(key).subscribe(response => {
        this.sch_res = response.results;
            console.log(this.sch_res);
    });
    }




  autoShowAds() {
    
     //interstitailConfig
     const interstitailConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-2911181978032139/6221858922',
        isTesting: false,
        autoShow: true
      };
      this.admobFree.interstitial.config(interstitailConfig);
  
  
      //prepare
      this.admobFree.interstitial.prepare()
      .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));    

  }

}
