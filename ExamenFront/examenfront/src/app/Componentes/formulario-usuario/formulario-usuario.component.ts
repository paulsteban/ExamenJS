import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
  cbxrols=['Administrador','Usuario'];
  @Input()
  nombreBoton: string;
  constructor() { }

  ngOnInit() {
  }

}
