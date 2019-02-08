
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from "../../environments/environment";
import {Evento} from "../Interfaces/Evento";

@Injectable()
export class EventoServicio {
  nombreModelo = '/Evento';
  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Evento[]> {
    const convenios$ = this._httpClient.get(environment.url + this.nombreModelo)
      .pipe(map(respuesta => {
        return <Evento[]> respuesta
      }));
    return convenios$;
  }

}

