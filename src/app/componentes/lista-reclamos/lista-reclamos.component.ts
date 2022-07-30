import { Component, OnInit } from '@angular/core';
import { Reclamos } from 'src/app/interfaces/Reclamos';

@Component({
  selector: 'app-lista-reclamos',
  templateUrl: './lista-reclamos.component.html',
  styleUrls: ['./lista-reclamos.component.css']
})
export class ListaReclamosComponent implements OnInit {

  listaReclamos: Reclamos[] = [
    { titulo: 'Angular', creador: 'Flavio', fechaCreacion: new Date(), texto: 'Esto es una prueba'},
    { titulo: 'Angular', creador: 'Flavio', fechaCreacion: new Date(), texto: 'Esto es una prueba1'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
