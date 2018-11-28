import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasPeliculasComponent } from './tarjetas-peliculas.component';

describe('TarjetasPeliculasComponent', () => {
  let component: TarjetasPeliculasComponent;
  let fixture: ComponentFixture<TarjetasPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetasPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
