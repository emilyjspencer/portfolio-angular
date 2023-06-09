import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '*', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
