import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  constructor(private route: Router) { }

  state = false;

  visitLinkedin() {
    window.location.href= 'https://uk.linkedin.com/in/emily-spencer-a407269b'
  }

  backHome() {
    this.state = true;
    setTimeout(() => {
      this.route.navigate(["/about"]);
      }, 1500)
   }

}
