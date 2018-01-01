import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions} from '@ionic-native/device-motion';

/**
 * Generated class for the DeviceMotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html',
})
export class DeviceMotionPage {
  data: any;
  subscription: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceMotion: DeviceMotion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMotionPage');
  }

  startWatching(){
    var options: DeviceMotionAccelerometerOptions = {
      frequency: 500
    };

    this.subscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;
    });
  }

  stopWatching(){
    this.subscription.unsubscribe();
  }
}
