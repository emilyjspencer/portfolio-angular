import { Component, ContentChild, HostBinding, Input, OnInit, QueryList } from '@angular/core';
import { IAccordionItem } from 'src/interfaces/IAccordionItem';
import { INTERESTS } from '../interests/interests';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {

  accordionsItems = INTERESTS;


  constructor() { }

  activeIndex: number = 0;

  toggle(event: { preventDefault: () => void; }, i: number) {
    event.preventDefault();
    console.log(event)
    console.log('toggle was clicked')
    this.activeIndex = i;
    console.log(this.activeIndex);
  }

}
