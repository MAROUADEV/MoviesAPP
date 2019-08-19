import { Component } from '@angular/core';

import { tvPage } from '../tv/tv';
import { HomePage } from '../movies/movies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = tvPage;


  constructor() {

  }
}
