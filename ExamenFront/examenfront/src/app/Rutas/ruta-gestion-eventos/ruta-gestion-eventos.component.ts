import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Servicios/auth-service.service';

@Component({
  selector: 'app-ruta-gestion-eventos',
  templateUrl: './ruta-gestion-eventos.component.html',
  styleUrls: ['./ruta-gestion-eventos.component.scss']
})
export class RutaGestionEventosComponent implements OnInit {

  constructor(private readonly _authService: AuthServiceService) { }

  ngOnInit() {
  }

}
