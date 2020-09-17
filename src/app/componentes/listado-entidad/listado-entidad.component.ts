import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listadoPaises = []; // Se llena con los datos del Padre- Desde el listadoPaises = [] declarado en el Padre.
  // después en el listado html recorro con el foreach este array
  @Output() emitirverpais: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  VerPais(pais){
    this.emitirverpais.emit(pais);
  }

}
