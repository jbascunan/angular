import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlBusqueda: string = "https://api.spotify.com/v1/search";
  urlArtista: string = "https://api.spotify.com/v1/artists";

  constructor(private http: Http) { }

  getArtistas(termino: string) {
    let headers = new Headers();
    headers.append('authorization', 'Bearer BQCFKcMughYtGZ0QDkqAtwGOdIQuS4Qa9hu6J1mZ-KAIRkkEjtQ8Y867BgL5Tmf45X85DygN6_0ahi6-r_qIcw');

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

}
