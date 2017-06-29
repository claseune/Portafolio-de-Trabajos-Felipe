import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DataPage } from '../pages/data/data';
import { RegistroPage } from '../pages/registro/registro';
import { GestosPage } from '../pages/gestos/gestos';
import { EditarPage } from '../pages/editar/editar';

import * as firebase from 'firebase';
import{ AngularFireModule } from 'angularfire2';
import{ AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export const config = {
  apiKey: "AIzaSyB12Slr5pnkr-MHElcikZ9YxfL8j3VoXzE",
  authDomain: "portafolio-e7b68.firebaseapp.com",
  databaseURL: "https://portafolio-e7b68.firebaseio.com",
  projectId: "portafolio-e7b68",
  storageBucket: "",
  messagingSenderId: "532440916066"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    DataPage,
    HomePage,
    LoginPage,
    RegistroPage,
    GestosPage,
    EditarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DataPage,
    HomePage,
    LoginPage,
    RegistroPage,
    EditarPage,
    GestosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
