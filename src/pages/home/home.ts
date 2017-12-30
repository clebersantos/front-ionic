import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Observable } from 'rxjs/Observable';
import { PerfilProvider } from '../../providers/perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UsuarioProvider, PerfilProvider]
})
export class HomePage {

  public usuarios = [];
  public perfis = [];
  public usuarioCadastro = {"_id":null,"nome": "", "idade": null, perfil:null}

  constructor(
    public navCtrl: NavController,
    private usuarioService: UsuarioProvider,
    private perfilService: PerfilProvider
  ) {

    this.getUsuarios();
    this.getPerfis();

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

  public getPerfis() {
    this.perfilService.findAll().subscribe(response => this.perfis = response);
  }

  public compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }
}
