import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(4000, style({opacity: 1}))
      ])
    ])
  ]
})
export class WelcomeComponent {

  constructor(private route: Router) { }

  state = false;
  link = '';

  zoomIn() {
    this.state = true;
    setTimeout(() => {
      this.route.navigate(["/about"]);
      }, 4000)
   }

  visitGithub() {
    window.location.href = 'https://github.com/emilyjspencer'
  }

  visitLinkedin() {
    window.location.href= 'https://uk.linkedin.com/in/emily-spencer-a407269b'
  }



}


