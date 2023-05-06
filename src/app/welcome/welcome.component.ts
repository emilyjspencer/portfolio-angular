import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
export class WelcomeComponent implements OnInit {
  faCoffee = faCoffee

  constructor(private route: Router) { }

  state = false;
  name = '';

  ngOnInit(): void {

  }

  zoomIn() {
    this.state = true;
    setTimeout(() => {
      this.route.navigate(["/about"]);
      }, 4000)
   }

   visitSocialLink() {
    this.route.navigate([""]);
    console.log('visitSocialLink was called')
   }



}
