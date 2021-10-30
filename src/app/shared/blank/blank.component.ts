import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
  
  stopDownArrow: boolean = false;
  nextTargetForArrow = "text-scroll-arrival";

  observer: IntersectionObserver;

  constructor() { 
    this.observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('smooth-arrival');
          if(entry.target.id === 'text-scroll-arrival') {
            this.nextTargetForArrow = "text-scroll-arrival2";
          }
          if(entry.target.id === 'text-scroll-arrival2'){
            this.nextTargetForArrow = "text-scroll-arrival3";
          }
          if(entry.target.id === 'text-scroll-arrival3') {
            this.stopDownArrow = true;
          }
        }
      });
    });
    
  
  }

  ngOnInit(): void {
    let el = document.getElementById('text-scroll-arrival');
    if(el !== null) {
      this.observer.observe(el);
    }
    let el2 = document.getElementById('text-scroll-arrival2');
    if(el2 !== null) {
      this.observer.observe(el2);
    }   
    let el3 = document.getElementById('text-scroll-arrival3');
    if(el3 !== null) {
      this.observer.observe(el3);
    }
  }

}
