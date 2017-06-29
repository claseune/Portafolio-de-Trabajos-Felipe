import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  private registroDatos: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, public alertCtrl: AlertController  ) {
    this.registroDatos = this.formBuilder.group({
      Mail: ['', Validators.required],
      Pass: ['', Validators.required]
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  Registro() {
    firebase.auth().createUserWithEmailAndPassword(this.registroDatos.controls['Mail'].value, this.registroDatos.controls['Pass'].value)
      .then((response) => {
        console.log(response)
        this.showAlertRegistro();
      })
      .catch((error) => {
        console.log(error)
        this.showAlertError();
      })
  }
  showAlertRegistro() {
    let alert = this.alertCtrl.create({
      title: 'Nice',
      subTitle: 'Accseso Obtenido',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error de creacion de usuario',
      buttons: ['OK']
    });
    alert.present();
  }
}
