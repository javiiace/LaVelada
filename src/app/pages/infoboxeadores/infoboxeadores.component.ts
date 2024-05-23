import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Boxers, boxeadores} from "../../info/boxeadores";
import {Location} from "@angular/common";


@Component({
  selector: 'app-infoboxeadores',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './infoboxeadores.component.html',
  styleUrl: './infoboxeadores.component.scss'
})
export class InfoboxeadoresComponent implements OnInit{
  luchador: string | null =null;
  infoluchador: Boxers |undefined;
  constructor(private ruta: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.ruta.paramMap.subscribe(params =>{
      this.luchador=params.get('id');
    })
    let boxers:Boxers[]= boxeadores;

    this.infoluchador=boxers.find(boxeador => boxeador.id === this.luchador)
  }

  goBack(): void{
    this.location.back();
  }
}
