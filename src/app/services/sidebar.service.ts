import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      submenu: [
        
        { titulo:'main', url:'dashborard'},
        { titulo:'progress', url:'progress'},
        { titulo:'grafica1', url:'grafica1'},

      ]
    }
  ]

  constructor() { }


}
