import {Component, OnDestroy, OnInit} from '@angular/core';
import moment from 'moment';
import {CountdowndiasComponent} from "../countdowndias/countdowndias.component";
@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [
    CountdowndiasComponent
  ],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy{
  countdownInverval?: any;
  timeRemaining?: any;

  constructor() {
  }

  ngOnInit() {
    const endDate = moment('2024-07-13T18:00:00')
    this.calculateTimeRemaining(endDate);
    this.countdownInverval = setInterval(() => {
      this.calculateTimeRemaining(endDate);
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.countdownInverval);
  }
  calculateTimeRemaining(endDate: any): void {
    const now = moment();
    const diff = endDate.diff(now);
    this.timeRemaining = moment.duration(diff);
  }
}
