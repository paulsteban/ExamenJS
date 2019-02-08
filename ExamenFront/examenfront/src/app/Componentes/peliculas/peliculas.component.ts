import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  @Input()
  id: number;
  @Input()
  nombre : string;
  @Input()
  aniolanzamiento  : number;
  @Input()
  rating  : number;
  @Input()
  actoresprincipales  : string;
  @Input()
  sinopsis  : string;
  constructor() { }

  ngOnInit() {
  }

}
