import { PeliculaService } from './../../services/pelicula.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

  constructor(private _peliculaServices: PeliculaService) { this.cargarPeliculas();}

  ngOnInit() {
    //this.cargarPeliculas();
  }

  cargarPeliculas() {
    console.log('ingreso cargar pelicula');
    this._peliculaServices.getPeliculas("nada");
    //console.log(this.termino);
  }


}
