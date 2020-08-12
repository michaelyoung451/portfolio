import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeadlineComponent } from './headline/headline.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { AbilitiesSectionComponent } from './abilities-section/abilities-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeadlineComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    AbilitiesSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
