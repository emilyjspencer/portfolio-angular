import { Injectable } from '@angular/core';
import { INTERESTS } from './interests/interests';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  interests = INTERESTS;
  constructor() { }

  getInterests() {
    return this.interests;
    console.log('getInterests was called')
    console.log(this.interests)
  }
}
