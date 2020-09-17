import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ruter:Router) { }

  ngOnInit(): void {
  }

  public numUno;
  public numDos;
  public promedio;
  public suma;


  Calcular() {
    this.suma = Number.parseInt(this.numUno,10) + Number.parseInt(this.numDos,10);
    this.promedio = this.suma / 2;
  }

  LogOut(){
    localStorage.clear();
    this.ruter.navigate(['']); // '' means login. You can put '/login' instead 
  }
}
