import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AgregarEditarReclamosComponent } from './componentes/agregar-editar-reclamos/agregar-editar-reclamos.component';
import { ListaReclamosComponent } from './componentes/lista-reclamos/lista-reclamos.component';
import { VerReclamosComponent } from './componentes/ver-reclamos/ver-reclamos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarReclamosComponent,
    ListaReclamosComponent,
    VerReclamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
