import { Component } from '@angular/core';
import { PeliculasService } from './servives/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesApp';

  constructor( private _peliculas: PeliculasService ) {
    this._peliculas.getMostPopulares().subscribe( (peliculas) => {
      console.log(peliculas);
    });
  }
}
