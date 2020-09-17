import { Component, OnInit} from '@angular/core';
import { MiservicioService } from '../../servicios/miservicio.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  listadoPaises = []; // Se llena con datos del GET (servicios). Será pasada al Input del otro componente - el Hijo
  paisseleccionado;

  constructor(private miservicio: MiservicioService) { }

  ngOnInit() {
    this.miservicio.obtenerPaises().subscribe((paises: any) => {
      console.log(paises);
      console.log('console log dentro del observable');
      this.listadoPaises = paises; // Lleno mi array con datos recibidos de afuera
    }, error => {
      console.log('Error');
    });
    
  }

  PaisSeleccionado(pais){
    this.paisseleccionado = pais;
  }

}
