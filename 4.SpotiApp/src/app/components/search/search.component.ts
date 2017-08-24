import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = "";

  constructor(private _spotifyServices: SpotifyService ) { }

  ngOnInit() {
    // this._spotifyServices.getArtistas("metallica").subscribe(data => {
    //   console.log('esto es del search.component');
    //   console.log(data);
    // });
  }
  
  buscarArtista(){
    this._spotifyServices.getArtistas(this.termino).subscribe();
    //console.log(this.termino);
  }

}
