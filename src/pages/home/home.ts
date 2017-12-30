import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UsuarioProvider]
})
export class HomePage {

  public usuarios = [];
  public usuarioCadastro = {"_id":null,"nome": "", "idade": null }

  constructor(public navCtrl: NavController, private usuarioService: UsuarioProvider) {

    this.getUsuarios();

  }

  public getUsuarios() {
    this.usuarioService.findAll().subscribe(response => this.usuarios = response);
  }

  public salvarUsuario() {
    if(this.usuarioCadastro._id == null) {
      this.usuarioService.salvar(this.usuarioCadastro).subscribe(Response => this.getUsuarios());
    } else {
      this.usuarioService.editar(this.usuarioCadastro).subscribe(Response => this.getUsuarios());
    }
  }

  public popularForm(usuario) {
    this.usuarioCadastro = usuario;
  }

  public deletar(id) {
    this.usuarioService.deletar(id).subscribe(Response => this.getUsuarios());
  }

}
