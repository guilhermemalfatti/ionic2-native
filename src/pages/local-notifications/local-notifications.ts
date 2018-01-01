import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html',
})
export class LocalNotificationsPage {
  results: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
    this.localNotifications.on('click', notification => {
      //var data = JSON.parse(notification.data);
      this.results = notification.data.name;
      //alert('Notification received! (${data.name})');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationsPage');
  } 

  scheduleNotification(){
    this.localNotifications.schedule({
      id: 1,
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      title: 'Cool Notification',
      text: 'This is my cool notification!',
      data: {
        id: 21,
        name: 'Cool Notification #21'
      },      
      icon: 'http://icons.iconarchive.com/icons/social-media-icons/glossy-social/512/Android-icon.png',
      smallIcon: 'res://ic_popup_reminder'
    });
  }

}
