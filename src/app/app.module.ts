import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//------------RUTAS----------//
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Nopage404Component } from './nopage404/nopage404.component';

//---importar modulo de paginas---//
import { PagesModule } from './pages/pages.module';


//----importar modulo de resgistros---//
import { RegistrosModule } from './registros/registros.module';


@NgModule({
  declarations: [

    AppComponent,
    Nopage404Component

   
  /*
    DashboradComponent,
    Grafica1Component,
   
    ProgressComponent,
    PagesComponent,
    */
    
    /*
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent
    */
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    RegistrosModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
