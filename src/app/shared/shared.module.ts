import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importar paginas
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//importar RouterMODULE
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
