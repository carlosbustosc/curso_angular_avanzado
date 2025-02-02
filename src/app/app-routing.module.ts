import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { LoginComponent } from './registros/login/login.component';
import { RegistroComponent } from './registros/registro/registro.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { Nopage404Component } from './pages/nopage404/nopage404.component';

import { PagesComponent } from './pages/pages.component';

const routes: Routes = [

  { path:"", 
    component:PagesComponent, //contiene el template
    children:[

      //rutas hijas
      { path: "dashborard", component: DashboradComponent },
      { path: "progress",  component: ProgressComponent  },
      { path: "grafica1",   component: Grafica1Component },
      { path: "", redirectTo:"dashborard", pathMatch:"full"}
    
    ]

   },

   
  //------rutas con otro diseño-----//
  { path:"registro",   component: RegistroComponent },
  { path: "login",      component: LoginComponent },
  
  
  { path: "**", component:Nopage404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
