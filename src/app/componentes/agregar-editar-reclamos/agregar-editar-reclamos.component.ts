import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reclamos } from 'src/app/interfaces/Reclamos';

@Component({
  selector: 'app-agregar-editar-reclamos',
  templateUrl: './agregar-editar-reclamos.component.html',
  styleUrls: ['./agregar-editar-reclamos.component.css']
})
export class AgregarEditarReclamosComponent implements OnInit {
  agregarReclamos: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agregarReclamos =  this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregar(){
    console.log(this.agregarReclamos);

    const reclamos: Reclamos = {
      titulo: this.agregarReclamos.get('titulo')?.value,
      creador: this.agregarReclamos.get('creador')?.value,
      texto: this.agregarReclamos.get('texto')?.value,
      fechaCreacion: new Date
    }

    console.log(reclamos);
  }

}
