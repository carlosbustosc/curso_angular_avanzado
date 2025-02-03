import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  

  // progreso barras padre
  progreso1:number = 5;
  progreso2:number = 10;


  //color botones
  color1: string = "btn btn-danger"
  color2: string = "btn btn-info"

  
  //----llenar barras por defecto----//
  get obtenerValor1(){

    return `${ this.progreso1 }%`
  }
  
  get obtenerValor2(){

    return `${ this.progreso2 }%`
  }




  //---recibir parametro del hijo y llenar barra
  funcionValor( valorDelHijo:number ){

    console.log(valorDelHijo)
    this.progreso1 = valorDelHijo
  }


  //---recibir parametro dle hijo llenar barra
  funcionValor2( valorDelHijo:number ){

    console.log(valorDelHijo);
    this.progreso2 = valorDelHijo
  }

}
