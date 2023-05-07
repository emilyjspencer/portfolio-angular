import { Injectable } from '@angular/core';
import { BACKENDDEVELOPMENT, DESIGN, FDM, FRONTENDDEVELOPMENT, MAKERS, OTHER, SHEFFIELD } from './skills/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  frontend = FRONTENDDEVELOPMENT;
  design = DESIGN;
  backend = BACKENDDEVELOPMENT;
  other = OTHER;
  makers = MAKERS;
  fdm = FDM;
  sheffield = SHEFFIELD;


  getFrontendSkills() {
    return this.frontend;
  }

  getDesignSkills() {
   return this.design;
  }

  getBackendSkills() {
   return this.backend;
  }

  getOtherSkills() {
    return this.other;
  }

  getMakersSkills() {
    return this.makers;
  }

  getFdmSkills() {
    return this.fdm;
  }

  getSheffieldSkills() {
    return this.sheffield;
  }
}
