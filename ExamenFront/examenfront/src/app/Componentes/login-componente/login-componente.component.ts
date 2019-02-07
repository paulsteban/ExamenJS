import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../Servicios/auth-service.service";
import {Usuario} from "../../Interfaces/Usuario";


@Component({
  selector: 'app-login-componente',
  templateUrl: './login-componente.component.html',
  styleUrls: ['./login-componente.component.scss']
})
export class LoginComponenteComponent implements OnInit {
  usuario = {
    nombre: '',
    password: ''
  };
usuarios = [];
helado = [];
  constructor(private readonly _authService: AuthServiceService) { }

  ngOnInit() {
    this.usuarios = this._authService.obtenertodosUsuarios();

     
       
     }
  login() {

    const respuestaLogin$ = this._authService
      .login(
        this.usuario.nombre,
        this.usuario.password
      );

    respuestaLogin$
      .subscribe(
        (raza) => {
          this._authService.usuario = raza;

          console.log(raza);
          console.log(this._authService.usuario)
        },
        (error) => {
          console.error(error);
        }
      );

  }

  

}
