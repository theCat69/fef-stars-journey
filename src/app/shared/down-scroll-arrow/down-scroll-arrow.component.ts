import { Component, HostListener, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-down-scroll-arrow',
  templateUrl: './down-scroll-arrow.component.html',
  styleUrls: ['./down-scroll-arrow.component.scss']
})
export class DownScrollArrowComponent implements AfterViewInit {

  svgBlink = false;
  svg2Blink = false;
  svg3Blink = false;

  svgFade = false;
  
  @Input()
  stop = false;

  constructor() { }

  ngAfterViewInit(): void {
    // console.log(this.svg);
    this.doTimerForArrow()
  }

  @HostListener('window:scroll') onScroll(): void {
    if(this.svgBlink && !this.svgFade && !this.stop) {
      this.svgFade = true;
      this.doTimerForArrow()
    } else if(this.svgBlink || this.svg2Blink || this.svg3Blink) {
      this.svgBlink = false;
      this.svg2Blink = false;
      this.svg3Blink = false;
    }
  }

  private delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
  }

  async doTimer(n: number) {
    await this.delay(n); 
  }

  doTimerForArrow() {
    this.doTimer(3000).then(() => {
      this.svgBlink = false;
      this.svg2Blink = false;
      this.svg3Blink = false;
      this.doTimer(5000).then(() => {
        if(!this.stop) {
          this.svgFade = false;
          this.svgBlink = true;
          this.doTimer(1000).then(() => {
            this.svg2Blink = true;
            this.doTimer(1000).then(() =>
              this.svg3Blink = true 
            )
          })
        }
      })
    })
  }
}

