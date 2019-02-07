import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Servicios/auth-service.service';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {
  usuario = {
    nombre: '',
    password: ''
  };
  constructor(private readonly _authService: AuthServiceService) { 

  }

  ngOnInit() {
    this.usuario=this._authService.usuario;

  }

}
