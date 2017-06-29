import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { GestosPage } from '../gestos/gestos';
import { DataPage } from '../data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  public PageLogin(){
    this.navCtrl.push(LoginPage);
  }
  public PageData(){
    this.navCtrl.push(DataPage);
  }
  public PageGestos(){
    this.navCtrl.push(GestosPage);
  }
  public PageRegistro(){
    this.navCtrl.push(RegistroPage);
  }
}
