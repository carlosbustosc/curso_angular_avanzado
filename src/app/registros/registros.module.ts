import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//----importar componentes---//
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

//--para rutas--//
import { RouterModule } from '@angular/router';

//--para formularios--/
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    RegistroComponent 
  ]
})
export class RegistrosModule { }
