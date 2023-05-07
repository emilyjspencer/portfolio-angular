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
export class WelcomeComponent implements OnInit {



  constructor(private route: Router) { }

  @ViewChild('github', { static: false })  github!: ElementRef;
  @ViewChild('linkedin', { static: false })  linkedin!: ElementRef;

  state = false;

  link: string = ''
  id: string = ''

  ngOnInit(): void {

  }

  zoomIn() {
    this.state = true;
    setTimeout(() => {
      this.route.navigate(["/about"]);
      }, 4000)
   }
;
   visitSocialLink(link: string, id: string) {
    console.log(this.github.nativeElement.getAttribute('class'))
    console.log(id)

    if (this.github.nativeElement.getAttribute('class') === 'fab fa-github fa-xl') {
    link = 'https://github.com/emilyjspencer'
    window.location.href = link;

    } else {
      link = 'https://www.linkedin.com/in/emily-spencer-a407269b/'
      window.location.href = link

    }
   }


}
