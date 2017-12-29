import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public urlUsuario = "http://127.0.0.1:8000/usuario";
  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

  public findAll():Observable<any> {
      return this.http.get(this.urlUsuario);
  }

}