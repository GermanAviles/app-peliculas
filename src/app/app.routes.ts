import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

// import { PageNotFoundComponent } from './';
import { HomeComponent } from './components/home/home.component';
import { DetallesPeliculaComponent } from './components/detalles-pelicula/detalles-pelicula.component';
import { PagenotfoundComponent } from './components//pagenotfound/pagenotfound.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'ultimas-peliculas', component: HomeComponent},
      {path: 'mas-populares', component: HomeComponent},
      {path: 'para-children', component: HomeComponent},
      {path: 'clasificacionc', component: HomeComponent}
    ]
  },
  { path: 'pelicula:/id', component: DetallesPeliculaComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', component: PagenotfoundComponent },

  // { path: 'path/:routeParam', component: MyComponent },
  // { path: 'staticPath', component: ... },
  // { path: '**', component: ... },
  // { path: 'oldPath', redirectTo: '/staticPath' },
  // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
export const AppRouting: ModuleWithProviders = RouterModule.forRoot( routes );
