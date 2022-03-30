import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { TerapiasComponent } from './terapias/terapias.component';
import { RouterModule } from '@angular/router';
import { FormularioInicioSecionComponent } from './formulario-inicio-secion/formulario-inicio-secion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegistroCuentaComponent } from './registro-cuenta/registro-cuenta.component';
import { RegistroClinicoComponent } from './registro-clinico/registro-clinico.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    InicioComponent,
    ProductosComponent,
    TerapiasComponent,
    FormularioInicioSecionComponent,
    RegistroCuentaComponent,
    RegistroClinicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
