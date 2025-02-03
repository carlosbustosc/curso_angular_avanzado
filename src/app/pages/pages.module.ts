import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importar paginas
import { DashboradComponent } from './dashborad/dashborad.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

//-------importar modulo de shared
import { SharedModule } from '../shared/shared.module';

//----importar modulo de components----//
import { ProgresoModule } from '../components/components.module';

//------importar el router--------//
import { AppRoutingModule } from '../app-routing.module';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboradComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ProgresoModule
  ],

  exports:[
    DashboradComponent,
    Grafica1Component,
    ProgressComponent,
    PagesComponent
  ]
})
export class PagesModule { }
