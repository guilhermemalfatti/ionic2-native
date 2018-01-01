import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Vibration } from '@ionic-native/vibration';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage, CameraPage, VibrationPage, GeolocationPage, BarcodePage, DeviceMotionPage } from '../pages/pages';


import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DeviceMotion} from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeolocationPage,
    VibrationPage,
    CameraPage,
    DeviceMotionPage,
    BarcodePage
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
    BarcodePage    
  ],
  providers: [
    StatusBar,
    Vibration,
    SplashScreen,
    Geolocation,
    BarcodeScanner,
    Camera,
    DeviceMotion,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
