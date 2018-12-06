import { Http, Headers } from "@angular/http";
import { Injectable } from '@angular/core';

@Injectable()
export class LoginProvider {
  headersaux;
  API_URL:string = 'http://contalentosas.com/SistemaRecaudoBackendV2/web/app_dev.php/login';

  constructor(public http: Http) {
    this.headersaux = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); //se establecen las headers
  }

  login(login) { //login es un objeto any que tiene atributos  'identificacion' y 'contrasenia'

    let json = JSON.stringify(login);
    
    let parametros = "json=" + json;

    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL, parametros, { headers: this.headersaux })
        // .map(res => res.json())
        .subscribe(data => {
          resolve(data.json());
        }, error => {
          reject(error);
        })
    }).catch((error) => {
      console.error('API Error: ', error.status);
      console.error('API Error: ', JSON.stringify(error));
      throw error;
      
    })
  }

}
