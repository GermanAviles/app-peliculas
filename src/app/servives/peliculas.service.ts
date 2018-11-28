import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = '82e4e7d3d2e6971220fa280490703f0f';
  private movieURL =  'https://api.themoviedb.org/3';
  public fotoMovie = 'image.tmdb.org/t/p/w300';

  constructor( private _http: HttpClient ) {
  }

  getURL(request: string, lenguage: string): string {
    return `${this.movieURL}${request}&api_key=${this.apikey}&language=${lenguage}`;
  }

  getMostPopulares() {
    const request = '/discover/movie?sort_by=popularity.desc';
    const ulrPopulares: string = this.getURL( request, 'es' );

    return this._http.jsonp( ulrPopulares, 'callback=JSONP_CALLBACK' ).pipe( map ( (res) => res) );
    // return this._http.get(ulr).pipe( map ( (res) => res) );
  }

  getEnCartelera() {
    const desde = new Date();
    const hasta = new Date();

    hasta.setDate( hasta.getDate() + 7 );

    const desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDate() }`;
    const hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;

    const request = `/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }`;
    const urlCartelera = this.getURL(request, 'es');

    return this._http.jsonp( urlCartelera, 'callback=JSONP_CALLBACK' ).pipe(map((res) => res));
  }

  getChildren() {
    const request = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    const urlChildren = this.getURL( request, 'es' );

    return this._http.jsonp( urlChildren, 'callback=JSONP_CALLBACK').pipe( map( (res) => res) );
  }

  searchMovie( parametro: string ) {
    const request = `/search/movie?query=${parametro}&sort_by=popularity.desc`;
    const urlBusqueda: string = this.getURL( request, 'es' );

    return this._http.jsonp( urlBusqueda, 'callback=JSONP_CALLBACK' ).pipe( map( (res) => res) );
  }
}
