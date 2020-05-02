import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  notifications: Notification[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initialiseNotifications();
  }

  initialiseNotifications() {
    this.notifications.push(new Notification('Play the trailer', 'Coming March 5', '../../assets/imgs/american dream.png', false));
    this.notifications.push(new Notification('The Hurt Locker', 'Now on Netflix for you', '../../assets/imgs/hurt-locker.png', false));
    this.notifications.push(new Notification('John Wick: Chapter 2', 'New arrival', '../../assets/imgs/notifications-image1.png', false));
    this.notifications.push(new Notification('Left Behind', 'New arrival', '../../assets/imgs/left-behind.png', true));
    this.notifications.push(new Notification('Vampire Academy', 'New arrival', '../../assets/imgs/vampire-academy.png', true));
    this.notifications.push(new Notification('Standup for Dummies', 'New arrival', '../../assets/imgs/standup-for-dummies.png', false));
    this.notifications.push(new Notification('Damnation', 'New arrival', '../../assets/imgs/damnation-notification.png', true));
    this.notifications.push(new Notification('Almost Banned', 'New arrival', '../../assets/imgs/almost-banned.png', false));
    this.notifications.push(new Notification('Hay gente asi', 'New arrival', '../../assets/imgs/hay-dente-asi.png', false));
    this.notifications.push(new Notification('Riase el Show', 'New arrival', '../../assets/imgs/riase-el-show.png', true));
    this.notifications.push(new Notification('Great America', 'New arrival', '../../assets/imgs/great-america.png', true));
    this.notifications.push(new Notification('Especial de Standup', 'New arrival', '../../assets/imgs/especial-de-standup.png', false));
    this.notifications.push(new Notification('Weeds', 'New arrival', '../../assets/imgs/weeds.png', false));
    this.notifications.push(new Notification('Equanimity', 'New arrival', '../../assets/imgs/equanimity.png', true));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }
}

export class Notification {
  constructor(title: string, description: string, picture: string, isNew: boolean) {
    this.title = title;
    this.description = description;
    this.dateTime = '15 Feb.';
    this.picture = picture;
    this.isNew = isNew;
  }

  title: string;
  description: string;
  dateTime: string;
  picture: string; 
  isNew: boolean
}
