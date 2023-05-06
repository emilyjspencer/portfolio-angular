import { Component, Input, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { ISkill } from 'src/interfaces/ISkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {


  @Input() frontend: ISkill[] = []
  @Input() design: ISkill[] = [];
  @Input() backend: ISkill[] = [];
  @Input() other: ISkill[] = [];
  @Input() title!: string;
  @Input() description!: string;

  constructor(private skill: SkillsService){}

  ngOnInit() {
   this.fetchFrontendSkills();
   this.fetchDesignSkills();
   this.fetchBackendSkills();
   this.fetchOtherSkills();
  }

  fetchFrontendSkills() {
   this.frontend = this.skill.getFrontendSkills()
   console.log(this.frontend)
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







}
