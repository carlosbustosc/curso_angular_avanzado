import { Component } from '@angular/core';

//usar Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private usarRuta:Router ){}
  
  ingresarLogin(){

    this.usarRuta.navigate( ['/paginas/dashborard'] )

  }

}
