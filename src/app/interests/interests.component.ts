import { Component, Input, OnInit } from '@angular/core';
import { IInterest } from 'src/interfaces/IInterest';
import { InterestsService } from '../interests.service';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit{
 @Input() interests: IInterest[] = [];
 @Input() title!: string;
 @Input() description!: string;

 constructor(private interest: InterestsService){}

 ngOnInit() {
  this.fetchInterests();
   console.log('interests component fetchinterests was called')
 }

 fetchInterests() {
  this.interests = this.interest.getInterests()
  console.log('interests service getInterests method was called')
  console.log(this.interests)
 }

}
