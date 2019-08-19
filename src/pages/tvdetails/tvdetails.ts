import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ServiceMoviesProvider } from '../../providers/service-movies/service-movies';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-tvdetails',
  templateUrl: 'tvdetails.html'
})
export class TvdetailsPage {
    tvdetails: string = "details";
    td: any;
    id:any;
    cast: any;
    gallery: any;
    galleryp: any;
    similar:any;
    year: any;
  constructor(private admobFree:AdMobFree,public navCtrl: NavController, public navParams: NavParams, private _service: ServiceMoviesProvider) {

        this.navCtrl = navCtrl;
        this.id = navParams.get('param1');
        this.getTvDetails(this.id);
        this.autoShowAds();
        this.getTvGallery(this.id);
        this.getTvSimilar(this.id);
  }
tvDetails(id){
    var tid = id;
          this.navCtrl.push(TvdetailsPage,{
    param1: tid});
      }

getTvDetails(tid){
    this._service.getTvDetails(tid).subscribe(response => {
            this.td = response;
            var year = response.first_air_date;
            var substr=year.substr(0,4);
            this.year = '('+substr+')';
    });
}

getTvGallery(tid){
    this._service.getTvGallery(tid).subscribe(response => {
        this.gallery = response.backdrops;
        this.galleryp = response.posters;
    });
}
getTvSimilar(tid){
    this._service.getTvSimilar(tid).subscribe(response => {
        this.similar = response.results;
    });
}
    doRefresh(refresher) {
    setTimeout(() => {

       this.getTvDetails(this.id);
        this.getTvGallery(this.id);
        this.getTvSimilar(this.id);

      refresher.complete();
    }, 2000);
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
