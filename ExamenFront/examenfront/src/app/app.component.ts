import { Component } from '@angular/core';
import { AuthServiceService } from './Servicios/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examenfront';

  constructor(private readonly _authService: AuthServiceService) { }

}
