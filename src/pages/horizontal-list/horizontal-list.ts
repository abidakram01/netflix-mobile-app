import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesInitialiser } from '../../data/MoviesInitialiser';

@IonicPage()
@Component({
  selector: 'page-horizontal-list',
  templateUrl: 'horizontal-list.html',
})
export class HorizontalListPage {
  title: string;
  popularMovies: any[] = [];
  trendingMovies: any[] = [];
  myMovies: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
    
    this.popularMovies = MoviesInitialiser.shuffle(MoviesInitialiser.initialiseMovies());
    this.trendingMovies = MoviesInitialiser.shuffle(MoviesInitialiser.initialiseMovies());
    this.myMovies = MoviesInitialiser.shuffle(MoviesInitialiser.initialiseMovies());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorizontalListPage');
  }
}