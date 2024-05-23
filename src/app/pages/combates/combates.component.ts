import { Component } from '@angular/core';
import {Boxers, boxeadores} from "../../info/boxeadores";
import {Combates, peleas} from "../../info/combates";
import {TarjetasComponent} from "../../componentes/tarjetas/tarjetas.component";

@Component({
  selector: 'app-combates',
  standalone: true,
  imports: [
    TarjetasComponent
  ],
  templateUrl: './combates.component.html',
  styleUrl: './combates.component.scss'
})
export class CombatesComponent {
  boxeadores: Boxers[]=boxeadores;
  peleas: Combates[] = peleas;
}
