import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLink]'
})
export class LinkDirective {

  constructor(private el: ElementRef) {
  this.el.nativeElement.style.color = 'pink';
  }
}
