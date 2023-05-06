import { Component, Input } from '@angular/core';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [
    trigger('collapseAccordion', [
      state('start', style({
        height: '0',
        overflow: 'hidden',
        opacity: '1',
        visibility: 'hidden'
      })),
      state('end', style({
        overflow: 'hidden'
      })),
    ]),
    trigger('rotate', [
      state('default', style({ transform: 'rotate(0)'})),
      state('rotated', style({ transform: 'rotate(180deg)'})),
    ])
  ]
})
export class AccordionItemComponent {

@Input() title!: string;

@Input() content!: string | string[];

hideContent = false;

constructor() { }

toggleAccordion() {
  this.hideContent = !this.hideContent;
}

}
