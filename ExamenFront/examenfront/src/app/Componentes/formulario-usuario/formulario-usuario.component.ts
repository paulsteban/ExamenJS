import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
  cbxrols=['Administrador','Usuario'];

  nombreU: string;
  correoU: string;
  passwordU: string;
  //BrowRoles: string;
  //@Input()
  //nombre: string;
  @Output()
  formularioValido = new EventEmitter();
  constructor() { }

  ngOnInit() {
    //this.nombreU = this.nombre;
  }
  emitirFormularioValido() {
    const objetoUsuario = {
      nombre: this.nombreU,
      correo: this.correoU,
      password: this.passwordU,
      //rol: this.BrowRoles
    };
    this.formularioValido.emit(objetoUsuario);
  }
}
