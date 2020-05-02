import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App,
              private viewCtrl: ViewController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signIn() {
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Logging in..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.app.getRootNav().setRoot(TabsPage);
    }, 2000);
  }

  goToSignUp() {
    if (this.navCtrl.canGoBack()) {
      this.viewCtrl.dismiss();
    }
    else {
      this.navCtrl.push('SignUpPage');
    }
  }
}
