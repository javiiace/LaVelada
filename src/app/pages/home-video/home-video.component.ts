import { Component } from '@angular/core';
import {HeroComponent} from "../../componentes/home/home.component";
import {CountdownComponent} from "../../componentes/countdown/countdown.component";
import {VideoComponent} from "../../componentes/video/video.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CountdownComponent,
    VideoComponent,
  ],
  templateUrl: './home-video.component.html',
  styleUrl: './home-video.component.scss'
})
export class HomeVideoComponent {

}
