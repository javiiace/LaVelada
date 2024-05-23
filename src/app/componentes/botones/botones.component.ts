import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.scss'
})
export class BotonesComponent {

  @Input() txtBtn?: string;
  @Input() enlaceBtn?: string;

}
