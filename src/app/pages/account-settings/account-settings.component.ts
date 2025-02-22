import { Component, OnInit } from '@angular/core';
//--importar servicio---//
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  
  public elemento:any = document.querySelector("#theme");
  
  constructor( private conectarServicio:SettingsService ){}

  ngOnInit(): void {
    
    if( localStorage.getItem('color') ){
      
      this.elemento.setAttribute('href', localStorage.getItem('color'))
    }


    this.conectarServicio.checkCurrentTheme();

  
  }
  
  //cambio de color 
  cambiarColor( color:string ){
    
    this.conectarServicio.cambiarColor( color )
      
  }


  

}
