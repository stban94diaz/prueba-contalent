import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public identificacion: string = "";
  public password: string = "";
  callback;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    return this.loginProvider.login({
      identificacion: this.identificacion,
      contrasenia: this.password
    })
      .then(res => {
        if(res.status==="error") {
          this.showAlert();
          return;
        }
        this.callback = this.navParams.get("callback");
        this.callback(res);
        this.navCtrl.pop();
        console.log(res);
      })
      .catch(e => console.log(e));
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Error de acceso!',
      subTitle: 'Datos incorrectos, revise su identificación y contraseña!',
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
