import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UsuarioProvider]
})
export class HomePage {

  public usuarios = [];

  constructor(public navCtrl: NavController, private usuarioService:UsuarioProvider) {

    this.getUsuarios();

  }

  public getUsuarios() {
  	this.usuarioService.findAll().subscribe(response => this.usuarios = response);
  }

}
