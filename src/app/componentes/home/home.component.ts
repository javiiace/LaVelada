import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BtnComponent} from "../botones/botones.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatIcon,
    BtnComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HeroComponent {

}
