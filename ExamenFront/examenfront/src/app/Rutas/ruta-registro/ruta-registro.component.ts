import { Component, OnInit } from '@angular/core';
import {UsuarioServicio} from "../../Servicios/usuario-servicio";
import {Usuario} from "../../Interfaces/Usuario";

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.scss']
})
export class RutaRegistroComponent implements OnInit {

  constructor(private readonly _usuarioservicio: UsuarioServicio) { }

  ngOnInit() {
  }
  CrearUsuario(usuarioObjeto) {

    // if (this.nombreContieneA(razaObjeto.nombre.toString())) {
    const crearRaza$ = this._usuarioservicio
      .create(
        usuarioObjeto.nombre,
        usuarioObjeto.correo,
        usuarioObjeto.password,
        "1995-25-01"
      );

    crearRaza$
      .subscribe(
        (usuario: Usuario) => {
          console.log('Raza');
          alert(`Raza creada: ${usuario.nombre}`);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );

    // } else {
    //   alert('ERROR, No contiene una letra A');
    // }
  }

}
