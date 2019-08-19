import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceMoviesProvider } from '../../providers/service-movies/service-movies';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-movies-details',
  templateUrl: 'movies-details.html'
})
export class MoviesDetailsPage {
    moviedetails: string = "details";
    id: any;
    md: any;
    gallery: any;
    galleryp: any;
    similar: any;
    year: any;
  constructor(private admobFree:AdMobFree,public navCtrl: NavController, public navParams: NavParams, private _service: ServiceMoviesProvider) {
        this.navCtrl = navCtrl;
        this.id = navParams.get('param1');
        this.getMovieDetails(this.id);
        this.autoShowAds();
        this.getMovieGallery(this.id);
        this.getMovieSimilar(this.id);
        
  }
movieDetails(id){
    var mid = id;
          this.navCtrl.push(MoviesDetailsPage,{
    param1: mid});
      }

  getMovieDetails(mid){
    this._service.getMovieDetails(mid).subscribe(response => {
            this.md = response;
            var year = response.release_date;
            var substr=year.substr(0,4);
            this.year = '('+substr+')';
    });
}

getMovieGallery(mid){
    this._service.getMovieGallery(mid).subscribe(response => {
        this.gallery = response.backdrops;
        this.galleryp = response.posters;
    });
}
getMovieSimilar(mid){
    this._service.getMovieSimilar(mid).subscribe(response => {

        this.similar = response.results;
    });
}

movDetails(id){
    this._service.getMovieDetails(id).subscribe(response => {
            this.md = response;
    });
}
   doRefresh(refresher) {
    setTimeout(() => {

        this.getMovieDetails(this.id);
        this.getMovieGallery(this.id);
        this.getMovieSimilar(this.id);

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
