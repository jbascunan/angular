import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { URLSearchParams, RequestOptions, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlBusqueda: string = "https://api.spotify.com/v1/search";
  urlArtista: string = "https://api.spotify.com/v1/artists";

  constructor(private http: Http) { }

  getArtistas(termino: string) {
    let headers = new Headers();
    
    //obtener token
    let headers1 = new Headers();
    let body = new URLSearchParams();
    body.append('client_id', 'eeded0a284af4401a105bd4a45e873a9');
    body.append('client_secret', 'ef08ebf4c00e421f94822607c0e4c59d');
    body.append('grant_type', 'client_credentials');

    let client_id = 'eeded0a284af4401a105bd4a45e873a9';
    let client_secret = 'ef08ebf4c00e421f94822607c0e4c59d';
    let grant_type = 'client_credentials';

    let body1 = `client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}`;

    let url2 = 'https://accounts.spotify.com/api/token';
    
    headers1.append('Content-Type', 'application/X-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });

    console.log('antes de obtener token');
    const req =  this.http
      .post(url2, body, options )
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error token");
      }
      );
    
   
    //autorizacion
    headers.append('authorization', 'Bearer BQCMFfRUmSyvOZ0lLOahZaPLubWGCFk8I7_8V62FLVhoVmbtaKxOMdRAGe-oOeVWrx7eg4YUHOmguHcQ-SGeSg');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
    .map(res => {
      //console.log(res.json().artists.items)
      this.artistas = res.json().artists.items;
      console.log(this.artistas);

      //return res.json().artists.items;
    })

  }

  getToken(){
    let _url: string ='https://reqres.in/api/users';
    return this.http.post(_url,{name:'Junaid',job:'Programmer',city:'Mumbai'})
    .map((res:Response)=>res.json);
  }

}
