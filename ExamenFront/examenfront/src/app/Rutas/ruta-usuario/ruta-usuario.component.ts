import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/Usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioServicio} from "../../Servicios/usuario-servicio";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  UsuarioAActualizar: Usuario;
  constructor(private readonly _activatedRoute: ActivatedRoute,
              private readonly _usuarioservicio: UsuarioServicio,
              private readonly _router: Router) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;

    rutaActiva$
      .subscribe(
        (parametros: ParametrosRutaActualizarUsuario) => {
          const raza$ = this._usuarioservicio
            .findOneById(parametros.idUsuario);

          raza$
            .subscribe(
              (usuario: Usuario) => {
                this.UsuarioAActualizar = usuario;
              },
              (error) => {
                console.error('Error: ', error);
              }
            );

        }
      );
  }
  buscarRaza(idRaza) {
    const raza$ = this._usuarioservicio
      .findOneById(idRaza);

    raza$
      .subscribe(
        (raza: Usuario) => {
          console.log(raza);
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
  }

  actualizarUsuario(usuarioActualizado) {

    usuarioActualizado.id = this.UsuarioAActualizar.id;

    const razaActualizada$ = this._usuarioservicio
      .updateOneById(usuarioActualizado);

    razaActualizada$
      .subscribe(
        (usuarioActualizado: Usuario) => {

          const url = ['/gestionusuarios'];

          alert('Raza actualizada ' + usuarioActualizado.nombre);

          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);
        }
      );

  }
}

interface ParametrosRutaActualizarUsuario {
  idUsuario: string;
}
