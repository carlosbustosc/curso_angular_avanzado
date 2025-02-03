import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {
  

  //---------input recibimos informacion del padre-------------
  //@Input('valor') progreso:number = 10;
    @Input() progreso:number = 0;
    @Input() colorBoton:string = "btn btn-primary";


    
    
    
    
    //-----------------emitir del hijo al padre---------------
    @Output() valorSalida: EventEmitter<number> = new EventEmitter();

    restarValor( valor:number ){
      
        if( (this.progreso <= 100) && (this.progreso > 0) ){
  
          this.progreso = this.progreso + valor;
  
          this.valorSalida.emit(this.progreso); // 10, 20, 30
  
        }
        
    }
  
    sumarValor(valor:number){
      
      if(this.progreso < 100) {
      
        this.progreso = this.progreso + valor;
        console.log(this.progreso)
       
        this.valorSalida.emit(this.progreso); // 30, 20 10, 0
     
      }


     
    
    }


  
    EnviarNumero( valor:number ){
      
      
      if(valor >= 100){
      
        this.progreso = 100;
      
      }else if( valor <= 0){
        
        this.progreso = 0;

      }

      this.valorSalida.emit(this.progreso);
      
    }

}
