import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() pais: any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
