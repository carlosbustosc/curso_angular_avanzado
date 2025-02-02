import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './registros/login/login.component';
import { RegistroComponent } from './registros/registro/registro.component';
import { Nopage404Component } from './nopage404/nopage404.component';


//---importar rutas hijas page
import { pagesRoutingModule } from './pages/app-routing.module';

//----importar rutas hijas registro
import { registroRoutingModule } from './registros/rutasRegistros.module';

const routes: Routes = [

  //----pagesRoutingModule---//
  //----pagesRoutingModule---//
  
  { path: "**", component:Nopage404Component }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    pagesRoutingModule, //rutas hijas pages
    registroRoutingModule //rutas hijas registro
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
