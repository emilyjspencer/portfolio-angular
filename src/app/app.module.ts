import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InterestsDataService } from '../../api/data';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    AboutComponent,
    ProjectsComponent,
    InterestsComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    AccordionComponent,
    ErrorComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InterestsDataService, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
