import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/Usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioServicio} from "../../Servicios/usuario-servicio";
import { Rol } from 'src/app/Interfaces/Rol';
import { RolServicio } from 'src/app/Servicios/rol-servicio';

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  UsuarioAActualizar: Usuario;
  roles = [{nombre:"Administrador", id:1}, {nombre:"Usuario",id:2}]
  constructor(private readonly _activatedRoute: ActivatedRoute,
              private readonly _usuarioservicio: UsuarioServicio,
              private readonly _rolservicio: RolServicio,
              private readonly _router: Router) { }

  ngOnInit() {
    const usuarios$ = this._usuarioservicio.findAll();
    usuarios$.subscribe((usuarios: Usuario[]) => {
  console.log(usuarios);
      let roles= this._rolservicio.buscarRoles(usuarios);
      console.log(this._rolservicio.buscarRoles(usuarios));
    });



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
  onClickMe(id:number) {
    console.log(id);
    console.log(this.UsuarioAActualizar.id);
    const eliminarRol$ = this._usuarioservicio.eliminarrol(id,this.UsuarioAActualizar.id);
    eliminarRol$
    .subscribe(
      (usuario: Usuario) => {
        console.log('Roeliminado');
        
    
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }

  actualizarUsuario(objetoUsuario) {
   
    objetoUsuario.id = this.UsuarioAActualizar.id;

    const razaActualizada$ = this._usuarioservicio
      .updateOneById(objetoUsuario);

    razaActualizada$
      .subscribe(
        (usuarioActualizado: Usuario) => {
          const crearRol$ = this._usuarioservicio.crearRol(objetoUsuario.idrolU,usuarioActualizado.id);
          console.log(objetoUsuario.idrolU);
          console.log(usuarioActualizado.id);

          crearRol$
      .subscribe(
        (usuario: Usuario) => {
          console.log('Rolcreado');
          
      
        },
        (error) => {
          console.error('Error: ', error);
        }
      );
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
