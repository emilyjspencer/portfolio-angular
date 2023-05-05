import { Component, Input, OnInit } from "@angular/core";
import { PROJECTS } from "./projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
