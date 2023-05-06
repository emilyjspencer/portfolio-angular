import { Injectable } from '@angular/core';
import { BACKENDDEVELOPMENT, DESIGN, FRONTENDDEVELOPMENT, OTHER } from './skills/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  frontend = FRONTENDDEVELOPMENT;
  design = DESIGN;
  backend = BACKENDDEVELOPMENT;
  other = OTHER


  getFrontendSkills() {
    return this.frontend;
    console.log(this.frontend)
  }

  getDesignSkills() {
    return this.design;
    console.log(this.design)
  }

  getBackendSkills() {
    return this.backend;
    console.log(this.backend)
  }

  getOtherSkills() {
    return this.other;
    console.log(this.other)
  }
}
