import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { loginPage } from './login';

@NgModule({
  declarations: [
    loginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
