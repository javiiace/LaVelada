import { Component } from '@angular/core';
import {HeroComponent} from "../../componentes/hero/hero.component";
import {CountdownComponent} from "../../componentes/countdown/countdown.component";
import {LazyLoadBoxeadoresComponent} from "../../componentes/lazy-load-boxeadores/lazy-load-boxeadores.component";
import {SelectBoxeadoresComponent} from "../../componentes/select-boxeadores/select-boxeadores.component";
import {VideoComponent} from "../../componentes/video/video.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CountdownComponent,
    LazyLoadBoxeadoresComponent,
    SelectBoxeadoresComponent,
    VideoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
