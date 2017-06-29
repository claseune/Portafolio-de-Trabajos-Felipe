import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestosPage } from './gestos';

@NgModule({
  declarations: [
    GestosPage,
  ],
  imports: [
    IonicPageModule.forChild(GestosPage),
  ],
  exports: [
    GestosPage
  ]
})
export class GestosPageModule {}
