import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GestosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestos',
  templateUrl: 'gestos.html',
})
export class GestosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestosPage');
  }
  CambioG(){
    //var newimg = document.getElementById("Google").src = "http://img.sc115.com/uploads/png/110727/20110727220619272.png";
  }
  CambioF(){
    //var newimg = document.getElementById("Fb").src = "http://scriptmode.com/secretprogrammingtutorial/img/overview/FB-ICON.png";
  }
  CambioT(){
    //var newimg = document.getElementById("Twt").src = "http://orig13.deviantart.net/91c9/f/2012/139/5/3/logo_de_twitter_png_by_itamy15-d50do0c.png";
  }
  CambioFondo(){
    var fondo1 = document.getElementById("slide1");
    //fondo1.style = "background-color: #f4f4f4";
    var fondo2 = document.getElementById("slide2");
    //fondo2.style = "background-color: #f4f4f4";
    var fondo3 = document.getElementById("slide3");
    //fondo3.style = "background-color: #f4f4f4";
  }
}
