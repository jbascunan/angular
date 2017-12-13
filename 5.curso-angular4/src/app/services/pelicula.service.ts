import { Pelicula } from './../models/pelicula';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PeliculaService {
  urlApiRestNodeJs: string = "/apiRest/getAllJson";
  Pelicula: Array<Pelicula>;

  constructor(private http: Http) {}

  getPeliculas(termino: string) {
    let header = new Headers();
    //header.append('Content-Type', 'application/json');
    //header.append('Accept', 'application/json');
    //header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    header.append('Access-Control-Allow-Origin', '*');
    //header.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    let options = new RequestOptions({ headers: header });
    return this.http.get(this.urlApiRestNodeJs, options).subscribe(resp => this.Pelicula = resp.json())
  }
}
