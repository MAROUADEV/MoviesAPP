import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(private admobFree:AdMobFree,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.autoShowAds();
    });



  }


  autoShowAds() {
    
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-2911181978032139/2725467041',
      isTesting: false,
      autoShow: true
    }
    this.admobFree.banner.config(bannerConfig);

    //prepare
    this.admobFree.banner.prepare()
    .then(() => {
        
    })
    .catch(e => console.log(e)); 
    

  }
}
