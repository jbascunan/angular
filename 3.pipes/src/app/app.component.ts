import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = 'fernando';
  nombre2 = 'ferNando HeRRera';
  arreglo = [1,2,3,4,5,6,7,8,9];

  pi: number = 3.141592;
  e: number = 2.718281828459045;

  a: number = 0.259;
  b: number = 1.3495;

  video ="u2FY0lKNlzs";

  heroe = {
    nombre: "logan",
    clave:"wolverine",
    edad: "100",
    direccion:{
      calle: "primera",
      numero: "10"
    }
  }

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('llego la data'), 3500);
  });

fecha = new Date();

}
