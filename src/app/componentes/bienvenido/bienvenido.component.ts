import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private ruter: Router) { }

  public nombre = localStorage.getItem("logged_user");

  ngOnInit(): void {

  }

  LogOut(){
    localStorage.clear();
    this.ruter.navigate(['']); // '' means login. You can put '/login' instead 
  }

}
