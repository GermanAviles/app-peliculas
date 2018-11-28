import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routes';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DetallesPeliculaComponent } from './components/detalles-pelicula/detalles-pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { TarjetasPeliculasComponent } from './components/shared/tarjetas-peliculas/tarjetas-peliculas.component';
import { ImagenPeliculaPipe } from './pipes/imagen-pelicula.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    DetallesPeliculaComponent,
    BuscarComponent,
    TarjetasPeliculasComponent,
    ImagenPeliculaPipe,
  ],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
