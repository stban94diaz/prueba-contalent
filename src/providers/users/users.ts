import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersProvider {
  headersaux;
  urlconsulta = "http://contalentosas.com/SistemaRecaudoBackendV2/web/app_dev.php/user/querymovil";

  constructor(public http: HttpClient) {
    this.headersaux = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  }

  descargarUsuarios(TOKEN) {
    //this.setOcupado('Descargando datos de usuarios...');

    let parametros = 'authorization='+ TOKEN ;

    //usuarios
    return new Promise((resolve, reject) => {
      this.http.post(this.urlconsulta, parametros, { headers: this.headersaux })
        .subscribe(res => {
          resolve(res);
        }, e => console.log(e));
    }).catch(e => {
      console.error("Error al descargar usuarios" + e.message);
      throw e;
    });
  }

}
