import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
export class WelcomeComponent implements OnInit {

  constructor(private route: Router) { }

  state = false;
  name = '';

  ngOnInit(): void {
    //this.fadeIn();

  }

  zoomIn() {
    this.state = true;
    setTimeout(() => {
      console.log('zoomIn called')
      this.route.navigate(["/about"]);
      }, 4000)
   }



}
