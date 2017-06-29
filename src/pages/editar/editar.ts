import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the EditarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {

  data: FirebaseListObservable<any>;
  private FormEditar : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              db: AngularFireDatabase, public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController) {

      this.data = db.list('/Estudiantes');

      this.FormEditar = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          sport: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
  }

  GuardarEdit(){
    var key = this.navParams.get('key');
    this.data.update(key, this.FormEditar.value)
    this.viewCtrl.dismiss();
  }

}
