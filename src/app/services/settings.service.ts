import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  
  public elemento:any = document.querySelector("#theme");

  constructor() {
    
    // al cargar la pagina
    this.elemento.setAttribute('href', localStorage.getItem('color') )
    console.log("servicio conectado")
   }
  
  
   // cambiar color en settings
   cambiarColor( color:string ){
    
      const url = `./assets/css/colors/${ color }.css`;
      this.elemento.setAttribute('href', url)
      localStorage.setItem('color', url);
      
      this.checkCurrentTheme()
    
   }

   //check en cada cuadro
   checkCurrentTheme(){
  
    let links = document.querySelectorAll(".selector");

    links.forEach( divs => {

      divs.classList.remove("working");

      const btnTheme  = divs.getAttribute('data-theme');
      const btnURL    = `./assets/css/colors/${ btnTheme }.css`;

      const currentTheme = this.elemento.getAttribute('href')
      
      if(btnURL === currentTheme){

        divs.classList.add('working')
      }
     
    })

  }


  }
