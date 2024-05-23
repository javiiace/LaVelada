import {Component, Input, input, OnInit} from '@angular/core';
import {Boxers, boxeadores} from "../../info/boxeadores";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.scss'
})
export class TarjetasComponent implements OnInit{

  @Input() luchador1:string="";
  @Input() luchador2:string="";
  @Input() luchador3?:string;
  @Input() luchador4?:string;


  infoLuchador1?: Boxers;
  infoLuchador2?: Boxers;
  infoLuchador3?: Boxers;
  infoLuchador4?: Boxers;


  constructor() {

  }

  ngOnInit() {
    this.infoLuchador1 = boxeadores.find(boxeador => boxeador.id ===this.luchador1);
    this.infoLuchador2 = boxeadores.find(boxeador => boxeador.id ===this.luchador2);

    if(this.luchador3!=null && this.luchador4!=null){
      this.infoLuchador3 = boxeadores.find(boxeador => boxeador.id ===this.luchador3);
      this.infoLuchador4 = boxeadores.find(boxeador => boxeador.id ===this.luchador4);
    }
  }
}
