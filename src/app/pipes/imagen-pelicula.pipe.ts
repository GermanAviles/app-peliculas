import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPelicula'
})
export class ImagenPeliculaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
