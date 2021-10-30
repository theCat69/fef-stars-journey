import { Component, HostListener, AfterViewInit, Input } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-down-scroll-arrow',
  templateUrl: './down-scroll-arrow.component.html',
  styleUrls: ['./down-scroll-arrow.component.scss']
})
export class DownScrollArrowComponent implements AfterViewInit {
  
  @Input()
  stop = false;

  @Input()
  notifier = new Subject();
  notifierCompleted = false;

  @Input()
  nextTarget = "";

  @Input()
  scrollCount = 4500;

  svgBlink = false;
  svg2Blink = false;
  svg3Blink = false;

  svgFade = false;

  scrollTimer: Observable<number> = new Observable<number>();
  
  constructor() { }

  ngAfterViewInit(): void {
    this.setScrollTimerAndSubscribe();
    // just to know it was completed to end the infinite timer loop
    this.notifier.subscribe(
        () => null,
        (e) => console.log(e),
        () => this.notifierCompleted = true
    )
  }

  @HostListener('window:scroll') onScroll(): void {
    //Completing by subject or boolean
    if(this.stop && !this.notifierCompleted) {
      this.notifier.next();
      this.notifier.complete();
    } else if (!this.stop && this.notifierCompleted) {
      this.stop = true;
    }
    //reset timer any time you scroll
    if(!this.stop) {
      this.resetScrollTimerAndSubscibe();
    }
    //Fade out
    if(this.svgBlink && !this.svgFade && !this.stop) {
      this.svgFade = true;
    } else if(this.svgBlink || this.svg2Blink || this.svg3Blink) {
      this.svgBlink = false;
      this.svg2Blink = false;
      this.svg3Blink = false;
    }
  }

  private resetScrollTimerAndSubscibe() {
    this.notifier.next();
    this.setScrollTimerAndSubscribe();
  }

  private setScrollTimerAndSubscribe() {
    this.scrollTimer = interval(this.scrollCount).pipe(takeUntil(this.notifier));
    this.scrollTimer.subscribe(
      () => this.makeArrowsAppear(),
      (e) => console.log(e),
      () => {
        if(this.svgBlink) {
          this.svgFade = true;
        }
      }
    )
  }

  //just a wait(time) async function
  private async doTimer(n: number) {
    return new Promise(r => {
      setTimeout(r, n);
    })
  }

  private makeArrowsAppear() {
    this.svgFade = false;
    this.svgBlink = true;
    this.doTimer(1000).then(() => {
      this.svg2Blink = true;
      this.doTimer(1000).then(() =>
        this.svg3Blink = true 
      )
    })  
  }

  scroll() {
    if(this.svgBlink) {
      const el = document.getElementById(this.nextTarget);
      if(el !== null) {
        el.scrollIntoView({block: 'center', behavior: 'smooth'});
      }
    }
  }
}

