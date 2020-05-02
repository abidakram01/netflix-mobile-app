import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Available for Download'},
      { title: 'Netflix Originals' },
      { title: 'TV Shows' },
      { title: 'Actions' },
      { title: 'Australian Movies' },
      { title: 'Children & Family' },
      { title: 'Comedies' },
      { title: 'Documentaries' },
      { title: 'Drama' },
      { title: 'Horror' },
      { title: 'Independent' },
      { title: 'International' },
      { title: 'LGBTQ' },
      { title: 'Music & Musicals' },
      { title: 'Romance' },
      { title: 'Sci-Fi & Fantasy' },
      { title: 'Thrillers' },
      { title: 'Audio Description' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  openPage(page) {
    if (page.title == 'Netflix Originals' || page.title == 'Audio Description') {
      this.navCtrl.push('GridListPage', { title: page.title });
    }
    else {
      this.navCtrl.push('HorizontalListPage', { title: page.title });
    }
  }
}
