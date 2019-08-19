import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TvdetailsPage} from '../tvdetails/tvdetails';
import { ServiceMoviesProvider } from '../../providers/service-movies/service-movies';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-search-tv',
  templateUrl: 'search-tv.html'
})
export class searchTvPage {
    sch: any;
    id:any;
    key:string='';
  constructor(private admobFree:AdMobFree,public navCtrl: NavController, public navParams: NavParams, private _service: ServiceMoviesProvider) {

    this.autoShowAds();
  }
  tvDetails(id){ 
    var tid = id;
          this.navCtrl.push(TvdetailsPage,{
    param1: tid});
      }
      searchtv(event, key)
    {
        this._service.getSearchTv(key).subscribe(response => {
        this.sch = response.results;
            console.log(response);
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
