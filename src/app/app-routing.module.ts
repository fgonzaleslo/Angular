import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarReclamosComponent } from './componentes/agregar-editar-reclamos/agregar-editar-reclamos.component';
import { ListaReclamosComponent } from './componentes/lista-reclamos/lista-reclamos.component';
import { VerReclamosComponent } from './componentes/ver-reclamos/ver-reclamos.component';

const routes: Routes = [
  { path: '', component: ListaReclamosComponent },
  { path: 'agregar', component: AgregarEditarReclamosComponent },
  { path: 'editar/:id', component: AgregarEditarReclamosComponent },
  { path: 'ver/:id', component: VerReclamosComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
