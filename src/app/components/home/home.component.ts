import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../servives/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  catdeseada: string;
  peliculas: any[];

  imgurltake = 'https://image.tmdb.org/t/p/w300';
  notimg = '../../../../assets/img/not-image.png';

  constructor( private router: Router,
               private _peliculas: PeliculasService) {

  }

  ngOnInit() {
    this.verCategoria( 'mp' );
  }

  verCategoria(categoria: string) {

    switch (categoria) {
      case 'pc': this.catdeseada = 'Películas en cartelera.';
                 this.getCartelera();
                break;
      case 'mp': this.catdeseada = 'Más populares.';
                 this.getPopulares();
                break;
      case 'pn': this.catdeseada = 'Películas para niños.';
                 this.getChildren();
                break;
      case 'cc': this.catdeseada = 'Clacificación C.';
                 this.getCartelera();
                break;
    }
  }

  getCartelera() {
    this.peliculas = [];

    this._peliculas.getEnCartelera().subscribe( (peliculas: any) => {

      peliculas.results.forEach(pelicula => {
        pelicula.poster_path = `${this.imgurltake}${pelicula.poster_path}`;
      });

      this.peliculas = peliculas.results;
      console.log(this.peliculas);

    });
  }

  getPopulares() {
    this.peliculas = [];

    this._peliculas.getMostPopulares().subscribe( (movies: any) => {
      // recorremos la lista que nos regresa la petición
      movies.results.forEach( (pelicula) => {
        // armamos el url correcto del poster
        // this.posterURL = `${this.imgurltake}${pelicula.poster_path}`;
        // lo agregamos a la propiedad del arreglo arreglo
        pelicula.poster_path = `${this.imgurltake}${pelicula.poster_path}`;
      });
      this.peliculas = movies.results;
      console.log(this.peliculas);
    });
  }

  getChildren() {
    this.peliculas = [];

    this._peliculas.getChildren().subscribe( (movies: any)  => {
      movies.results.forEach(pelicula => {
        pelicula.poster_path = `${this.imgurltake}${pelicula.poster_path}`;
      });
      this.peliculas = movies.results;
    });
  }

}
