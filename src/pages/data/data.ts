import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController ,ModalController  } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { EditarPage } from '../editar/editar';

/**
 * Generated class for the DataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  info: any;
  records: FirebaseListObservable<any>;
  private Inputs: FormGroup;

  constructor(public navCtrl: NavController,
              db: AngularFireDatabase,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController) {

      this.records =  db.list('/Estudiantes')

      this.Inputs = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          sport: ['', Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }
  Guardar(){
    if(this.Inputs.valid){
      this.records.push(this.Inputs.value)
      let alert = this.alertCtrl.create({
        title: 'Nice',
        subTitle: 'Guardado Correctamente',
        buttons: ['OK']
      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Verifique su información',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  delete(key,name){
    let deleteM = this.toastCtrl.create({
      position: 'bot',
      message: name + 'Ya se elimino a '+name,
      showCloseButton: true,
      closeButtonText: 'OK'});
    let borrar = this.alertCtrl.create({
      title: 'Eliminar',
      subTitle: 'Desea eliminar a '+name,
      buttons: [
      {text: 'IIE',handler: ()=>{}},
      {text: 'HAI',handler: ()=>{this.records.remove(key).then(_=> deleteM.present())}}
      ]
    });
    borrar.present();
  }
  editar(key){
    let info = {
      key: key
    }
    this.modalCtrl.create(EditarPage, info).present();
  }
}
