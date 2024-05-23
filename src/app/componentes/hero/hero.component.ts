import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BotonesComponent} from "../botones/botones.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatIcon,
    BotonesComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
