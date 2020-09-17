import { Component, OnInit } from '@angular/core';
import { Usuario } from "../clases/usuario";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ruter:Router) { }

  ngOnInit(): void {
  }

  public nombre: string;
  public clave: string;
  public usuario:Usuario;

  Login() {
    this.usuario = new Usuario(this.nombre,this.clave);

    if(this.usuario.nombre == "Pepe" && this.usuario.clave == "123456") {
      localStorage.setItem("logged_user",this.usuario.nombre);
      this.ruter.navigate(['/welcome']);
    } else {
      this.ruter.navigate(['/error']);
    }
  }

}
