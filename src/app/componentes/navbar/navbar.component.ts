import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {EnviromentService} from "../../servicios/enviroment.service";
import {MaterialModulesModule} from "../../modulos/material-modules/material-modules.module";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MaterialModulesModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public mostrarMenu=false;
  public screenWidth = 0;

  constructor(private env: EnviromentService) {
  }



  ngOnInit(): void{
    this.env.getScreenWidth().subscribe((width:number) => {
      this.screenWidth = width;
      // Aquí puedes realizar acciones adicionales cada vez que cambie el ancho de la pantalla
      console.log('Ancho de pantalla cambiado:', this.screenWidth);
    });  }

  public toggleMenu(){
    this.mostrarMenu=!this.mostrarMenu;
  }
}
