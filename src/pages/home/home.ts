import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:string = "Usuarios"
  users;
  token;

  constructor(public navCtrl: NavController, public userProvider: UsersProvider) {
  }

  openLogin() {
    this.navCtrl.push(LoginPage, {callback: (token) => {
      this.token = token;
      this.userProvider.descargarUsuarios(this.token)
        .then(res => {
          this.users = res.users;
          console.log(res);
        })
        .catch(e => console.log(e));
    }})
  }

}
