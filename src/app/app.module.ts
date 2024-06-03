import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AccessScComponent } from './projects/access-sc/access-sc.component';
import { ScrabbleComponent } from './projects/scrabble/scrabble.component';
import { EviteComponent } from './projects/evite/evite.component';
import { CVComponent } from './main-pages/cv/cv.component';
import { ProjectContainerComponent } from './components/project-container/project-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProjectCardComponent,
    ProgressBarComponent,
    AccessScComponent,
    ScrabbleComponent,
    EviteComponent,
    CVComponent,
    ProjectContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // angular material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
