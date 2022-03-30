import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioInicioSecionComponent } from './formulario-inicio-secion/formulario-inicio-secion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroClinicoComponent } from './registro-clinico/registro-clinico.component';
import { RegistroCuentaComponent } from './registro-cuenta/registro-cuenta.component';
import { TerapiasComponent } from './terapias/terapias.component';

const newLocal = 'InicioSesion';
const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'productos',component: ProductosComponent},
  {path:'terapias',component: TerapiasComponent},
  {path:'sesion',component: FormularioInicioSecionComponent},
  {path:'registro',component:RegistroCuentaComponent},
  {path:'registro-cli',component:RegistroClinicoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
