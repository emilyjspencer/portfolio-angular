import { Injectable } from '@angular/core';
import { IAccordionItem } from 'src/interfaces/IAccordionItem';
import { INTERESTS } from './interests/interests';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  constructor() { }

  items: IAccordionItem[] = [];

  fetchData(){

  }
}
