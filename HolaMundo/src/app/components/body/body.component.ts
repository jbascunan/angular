import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
  
})
export class BodyComponent {
  mostrar:boolean=false;
  frase:any = {
    mensaje: "gran poder",
    autor: "ben"
  };

  personajes:string[] =["spiderman", "venom", "Dr. Octopus"];

}
