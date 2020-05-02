import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goToUsers() {
    this.navCtrl.push('UsersPage');
  }

  goToNotifications() {
    this.navCtrl.push('NotificationsPage');
  }

  goToMyList() {
    this.navCtrl.push('MylistPage');
  }

  goToSettings() {
    this.navCtrl.push('SettingsPage');
  }

  signOut() {
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Logging out..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.app.getRootNav().setRoot(SignInPage);
    }, 2000);
  }
}
