import {Component, HostListener, PLATFORM_ID, Inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./componentes/navbar/navbar.component";
import {EnviromentService} from "./servicios/enviroment.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LaVelada';
  public screenWidth: number=0;




}
