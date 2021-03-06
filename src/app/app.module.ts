import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage, CameraPage, VibrationPage, GeolocationPage, BarcodePage, DeviceMotionPage, LocalNotificationsPage } from '../pages/pages';


import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { DeviceMotion} from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeolocationPage,
    VibrationPage,
    CameraPage,
    DeviceMotionPage,
    BarcodePage,
    LocalNotificationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeolocationPage,
    VibrationPage,
    CameraPage,
    DeviceMotionPage,
    BarcodePage,
    LocalNotificationsPage
  ],
  providers: [
    StatusBar,
    Vibration,
    SplashScreen,
    Geolocation,
    BarcodeScanner,
    Camera,
    DeviceMotion,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
