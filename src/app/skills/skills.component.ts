import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  skills = ['Angular', 'React', 'Vanilla JavaScript', 'Jest', 'Storybook', 'RxJS',
  'TypeScript', 'NodeJS', 'Ruby', 'MaterialUI', 'AngularMaterial', 'RSpec', 'SQL', 'SCSS'];

  lesserSkills = ['Java', 'Python', 'JUnit']

  ngOnInit(): void {
  }

  learnMoreSkills() {
    console.log('Learn More Skills');
  }

  learnMoreLessSkills() {
    console.log('Learn More Lesser Skills');
  }

}
