import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaGestionUsuarioComponent } from './Rutas/ruta-gestion-usuario/ruta-gestion-usuario.component';
import { RutaUsuarioComponent } from './Rutas/ruta-usuario/ruta-usuario.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';
import { RutaRegistroComponent } from './Rutas/ruta-registro/ruta-registro.component';
import { RutaGestionEventosComponent } from './Rutas/ruta-gestion-eventos/ruta-gestion-eventos.component';
import { RutaEventoComponent } from './Rutas/ruta-evento/ruta-evento.component';
import { RutaInicioComponent } from './Rutas/ruta-inicio/ruta-inicio.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { LoginComponenteComponent } from './Componentes/login-componente/login-componente.component';
import {AuthServiceService} from "./Servicios/auth-service.service";
@NgModule({
  declarations: [
    AppComponent,
    RutaGestionUsuarioComponent,
    RutaUsuarioComponent,
    RutaLoginComponent,
    RutaRegistroComponent,
    RutaGestionEventosComponent,
    RutaEventoComponent,
    RutaInicioComponent,
    LoginComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Acceso a un servicio HttpClient
    FormsModule,
    TableModule

  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
