import { Component } from '@angular/core';

//---importar ---servicio---//
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  guardarMenu:any = []

  constructor( private conectarServicio : SidebarService ){

      
    this.guardarMenu = this.conectarServicio.menu;
    console.log(this.guardarMenu)
  }

}
