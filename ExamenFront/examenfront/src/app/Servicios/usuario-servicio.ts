
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Usuario} from "../Interfaces/Usuario";
import {environment} from "../../environments/environment";

@Injectable()
export class UsuarioServicio {
  nombreModelo = '/Usuario';
  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Usuario[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Usuario[]> respuesta
      }));
    return convenios$;
  }

  delete(id: number): Observable<Usuario> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Usuario> r)); // Castear
  }
}

