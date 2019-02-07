import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {find, map, takeWhile} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Usuario} from '../Interfaces/Usuario';
@Injectable()
export class AuthServiceService {
  usuario: any = {

  };
  roles = [

    {
      id: 2,
      nombre: 'Usuario'
    }
  ];
  constructor(private readonly _httpClient: HttpClient) { }
  login(nombre: string,
        password: string): Observable<Usuario> {

    const url = environment.url + '/Usuario/login';

    return this._httpClient
      .post(url, {
        nombre: nombre,
        password: password
      })
      .pipe(map(r => <Usuario>r)); // Casteo

  }
  obtenertodosUsuarios() {

    return this._httpClient.get(environment.url + '/Usuario').pipe(map(r => <Usuario[]> r));
  }
  esAdministrador(): boolean {
    return this.roles.some((rol) => rol.id === 1);
  }
}
