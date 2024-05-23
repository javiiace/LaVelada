import { Component } from '@angular/core';
import {Boxers, boxeadores} from "../../info/boxeadores";
import {LazyLoadBoxeadoresComponent} from "../lazy-load-boxeadores/lazy-load-boxeadores.component";

@Component({
  selector: 'app-select-boxeadores',
  standalone: true,
  imports: [
    LazyLoadBoxeadoresComponent
  ],
  templateUrl: './select-boxeadores.component.html',
  styleUrl: './select-boxeadores.component.scss'
})
export class SelectBoxeadoresComponent {
  boxeadores: Boxers[] = boxeadores;
}
