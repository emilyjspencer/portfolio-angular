import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: Router) { }

  state = false;
  name = '';

  ngOnInit(): void {

  }

  zoomIn() {
    this.state = true;

    setTimeout(() => {
    console.log('zoomIn called')
    this.route.navigate(["/about"]);
    }, 3000)
   }
  }


