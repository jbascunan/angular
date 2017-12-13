import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private _usuarioServices: UsuarioService) { }

  ngOnInit() {
  }

  cargarUsuarios() {
    this._usuarioServices.getUsuarios("nada");
    //console.log(this.termino);
  }


}
