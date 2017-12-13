import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public profileObj: any = { name: '', job: '', city: '', id: ''};
  public tokenObj: any = { access_token: '', token_type: '', expires_in: 0 };

  titulo:string = 'nada';
  constructor(private _spotifyServices: SpotifyService ) { }

  ngOnInit() {
  }

  public getToken():void{
    console.log('boton token');
    this._spotifyServices.getToken().subscribe(res => {
      this.profileObj=res;
      console.log(this.profileObj);
    });
  }

  public getTokenSpotify(): void {
    console.log('boton token spotify');
    this._spotifyServices.getTokenSpotify().subscribe(res => {
      this.tokenObj = res;
      console.log(this.tokenObj);
    });
  }

}
