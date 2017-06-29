import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private data: FormGroup;
  private varEmail = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.data = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
    .then((response) => {
      firebase.auth().onAuthStateChanged(function (user){
        if(!user.emailVerified){
          user.sendEmailVerification();
        }
      })
      console.log(response);
      this. showAlertRegistro();
    })
    .catch((error) => {
      console.log(error.message)
      this. showAlertError(this.varEmail);
    })
  }
  showAlertError(verif:boolean) {
    var texto;
    if(verif = true){
      texto= 'Error de autentificacion'
    }
    if(verif = false){
      texto= 'Error de contraseña'
    }
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: texto,
      buttons: ['OK']
    });
    alert.present();
  }
  showAlertRegistro() {
    let alert = this.alertCtrl.create({
      title: 'Nice',
      subTitle: 'Accseso Obtenido',
      buttons: ['OK']
    });
    alert.present();
  }
  LogFB(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;0
    }).catch(function(error) {
    });
  }

}
