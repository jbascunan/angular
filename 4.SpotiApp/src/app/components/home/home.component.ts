import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public profileObj: any = { name: '', job: '', city: '', id: '', createdAt:''};
  constructor(private _spotifyServices: SpotifyService ) { }

  ngOnInit() {
  }

  public getToken():void{
    console.log('boton token');
    this._spotifyServices.getToken().subscribe(res => {
      this.profileObj=res;
      console.log(this.profileObj.json());
    });
  }

}
