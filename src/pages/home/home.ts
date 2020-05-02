import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesInitialiser } from '../../data/MoviesInitialiser';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  popularMovies: any[] = [];
  trendingMovies: any[] = [];
  myMovies: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.popularMovies = MoviesInitialiser.shuffle(MoviesInitialiser.initialiseMovies());
    this.trendingMovies = MoviesInitialiser.shuffle(MoviesInitialiser.initialiseMovies());
    this.myMovies = MoviesInitialiser.shuffle(MoviesInitialiser.initialiseMovies());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToShowDetails() {
    this.navCtrl.push('ShowDetailsPage');
  }

  goToMovieDetails() {
    this.navCtrl.push('MovieDetailsPage');
  }

  playVideoTrailer() {
    this.navCtrl.push('VideoPlaybackPage');
  }
}
