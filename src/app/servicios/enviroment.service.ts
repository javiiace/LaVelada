import { Injectable,NgZone, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  private screenWidth = new BehaviorSubject<number>(0);

  constructor(private ngZone: NgZone) {
    if (typeof window !== 'undefined') {
      this.updateScreenWidth();
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('resize', () => {
          this.ngZone.run(() => {
            this.updateScreenWidth();
          });
        });
      });
    }
  }

  private updateScreenWidth() {
    if (typeof window !== 'undefined') {
      this.screenWidth.next(window.innerWidth);
    }
  }

  getScreenWidth() {
    return this.screenWidth.asObservable();
  }
}
