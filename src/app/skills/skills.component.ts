import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { ISkill } from 'src/interfaces/ISkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  mobile = false;
  public currentWindowWidth!: number;

  @Input() frontend: ISkill[] = []
  @Input() design: ISkill[] = [];
  @Input() backend: ISkill[] = [];
  @Input() other: ISkill[] = [];
  @Input() makers: ISkill[] = [];
  @Input() title!: string;
  @Input() description!: string[];
  @Input() fdm: ISkill[] = [];


  constructor(private skill: SkillsService){}

  @HostListener('window:resize')
onResize() {
  this.currentWindowWidth = window.innerWidth
}

  ngOnInit() {
   this.fetchFrontendSkills();
   this.fetchDesignSkills();
   this.fetchBackendSkills();
   this.fetchOtherSkills();
   this.fetchMakersSkills();
   this.fetchFdmSkills();
   this.currentWindowWidth = window.innerWidth;
  }

  fetchFrontendSkills() {
   this.frontend = this.skill.getFrontendSkills()
  }
  fetchDesignSkills() {
    this.design = this.skill.getDesignSkills()
   }

   fetchBackendSkills() {
    this.backend = this.skill.getBackendSkills()
   }

   fetchOtherSkills() {
    this.other = this.skill.getOtherSkills()
   }

   fetchMakersSkills() {
    this.makers = this.skill.getMakersSkills();
   }

   fetchFdmSkills() {
    this.fdm = this.skill.getFdmSkills();
   }






}
