import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-coming-soon',
  templateUrl: 'coming-soon.html',
})
export class ComingSoonPage {
  movies: Movie[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initialiseMovies();
  }

  initialiseMovies() {
    for (var i = 0; i < 3; i++) {
      this.movies.push( new Movie('3 Days to Kill', '../../assets/imgs/coming-soon1.png'));
      this.movies.push( new Movie('Big Bear', '../../assets/imgs/big-bear.png'));
      this.movies.push( new Movie('Deadly Impact', '../../assets/imgs/deadly-impact.png'));
      this.movies.push( new Movie('Homeland: Season 6', '../../assets/imgs/homeland.png'));
      this.movies.push( new Movie('Inside Jaguar', '../../assets/imgs/inside-jaguar.png'));
      this.movies.push( new Movie('The Purge: Election Year', '../../assets/imgs/purge-election-year.png'));
      this.movies.push( new Movie('Derren Brown: The Push', '../../assets/imgs/push.png'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComingSoonPage');
  }
}

export class Movie {
  constructor(title: string, picture: string) {
    this.title = title;
    this.description = 'A terminally ill secret agent accepts a risky mission in exchange for an experimental drug that might save him -- if he can survive its side effects.';
    this.picture = picture;
  }

  title: string;
  description: string;
  picture: string;
}