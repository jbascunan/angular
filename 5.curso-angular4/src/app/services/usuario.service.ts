import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsuarioService {
  urlApiUsuarios: string = "http://jsonplaceholder.typicode.com/users";
  Usuario: Array<Usuario>;

  constructor(private http: Http) { }

  getUsuarios(termino: string) {
    return this.http.get(this.urlApiUsuarios).subscribe(resp => this.Usuario = resp.json())
  }
}
