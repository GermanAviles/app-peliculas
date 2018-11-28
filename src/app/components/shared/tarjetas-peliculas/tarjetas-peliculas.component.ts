import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../../../servives/peliculas.service';

@Component({
  selector: 'app-tarjetas-peliculas',
  templateUrl: './tarjetas-peliculas.component.html',
  styleUrls: ['./tarjetas-peliculas.component.css']
})
export class TarjetasPeliculasComponent implements OnInit {


  imgurltake = 'https://image.tmdb.org/t/p/w300';
  posterURL: string;
  notimg = '../../../../assets/img/not-image.png';

  @Input() categoriaDeseada: string;
  @Input() peliculas: any = {};

  constructor(private _peliculas: PeliculasService) {
  //  this._peliculas.getMostPopulares().subscribe( (movies: any) => {
  //    // recorremos la lista que nos regresa la petición
  //    movies.results.forEach( (pelicula) => {
  //      pelicula.poster_path = `${this.imgurltake}${pelicula.poster_path}`;
  //    });
  //    this.peliculas = movies.results;
  //    console.log(this.peliculas);
  //  });

  }

  ngOnInit() {
  }
}
