import { Component, OnInit } from '@angular/core';

//---conectar servicio----//
import { SettingsService } from '../services/settings.service'; 

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  constructor(private conectarServicio:SettingsService){

  }

  ngOnInit(): void {
      
   
  }

 
}
