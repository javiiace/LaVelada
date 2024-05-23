import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-countdowndias',
  standalone: true,
  imports: [],
  templateUrl: './countdowndias.component.html',
  styleUrl: './countdowndias.component.scss'
})
export class CountdowndiasComponent {

  @Input() numero?:string;
  @Input() texto?:string;


}
