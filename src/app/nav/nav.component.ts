import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor() { }

  @Input() logo = '../../assets/images/logo.png';

}
