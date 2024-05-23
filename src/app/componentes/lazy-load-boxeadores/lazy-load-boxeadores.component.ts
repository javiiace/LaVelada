import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-lazy-load-boxeadores',
  standalone: true,
  imports: [],
  templateUrl: './lazy-load-boxeadores.component.html',
  styleUrl: './lazy-load-boxeadores.component.scss'
})
export class LazyLoadBoxeadoresComponent {
  @Input() nombre?:string;
  @Input() imagen?:string;

  public rotacion:string;

  constructor() {
    this.rotacion=this.generarRotacionAleatoria(-45, 45);
  }
  public generarRotacionAleatoria(min: number, max: number):string {

    let rotacionAleatoria: string = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    console.log(rotacionAleatoria)
    return rotacionAleatoria;
  }
}
