import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {loginPage} from "../login/login";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(loginPage);
  }
}
