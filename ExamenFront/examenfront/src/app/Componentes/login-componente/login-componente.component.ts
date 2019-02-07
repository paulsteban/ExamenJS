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
  constructor(private readonly _authService: AuthServiceService) { }

  ngOnInit() {
    const convenios$ = this.
    _authService.obtenertodosUsuarios();
    convenios$.subscribe((convenios: Usuario[]) => {
      console.log(convenios);
      this.usuarios = convenios.map((valuex,indice,convenios)=>
      {let prueba =valuex.roles[0];
         console.log(valuex.roles[0].id);
        return prueba})

    });
    console.log(this.usuarios)
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
        },
        (error) => {
          console.error(error);
        }
      );

  }


}
