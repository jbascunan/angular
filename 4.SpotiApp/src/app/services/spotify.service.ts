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
    headers.append('authorization', 'Bearer BQDC_YaDpcwOy81PITReyH8lZ1sNY8vY2sahamM41OZxRTfBucpHkXxCKuDmhexsCMl8xri5EOL6IgllZWoaow');

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers })
    .map(res => {
      //console.log(res.json().artists.items)
      this.artistas = res.json().artists.items;
      console.log(this.artistas);

      return res.json().artists.items;
    })

  }

}
