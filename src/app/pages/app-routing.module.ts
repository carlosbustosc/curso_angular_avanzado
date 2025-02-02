import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';




const routes: Routes = [ 
  
  { path:"paginas", 
      component:PagesComponent, //contiene el template
      children:[
  
        //rutas hijas
        { path: "dashborard", component: DashboradComponent },
        { path: "progress",  component: ProgressComponent  },
        { path: "grafica1",   component: Grafica1Component },
        { path: "", redirectTo:"dashborard", pathMatch:"full"}
      
      ]
  
     },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pagesRoutingModule {}
