import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../global-styles.css']
})
export class HomeComponent {

  public constructor(private router: Router) {

  }

  public languages: string[] = [
    'TypeScript',
    'JavaScript',
    'C#',
    'Swift'
  ];
  public frameworks: string[] = [
    'Angular',
    'ASP.NET',
    'React Native',
  ];
  public tools: string[] = [
    'AWS',
    'GCP',
    'Firebase',
    'MongoDB Atlas',
  ];

  public octoHeadline: string = 'First release is available on the iOS App Store!';
  public octoDescription: string = 'OCTO Flashcards is a digital study tool created for the Apple iPad. It allows users to create flashcards using the Apple Pencil, eliminating paper waste and keeping your study material organized.'

  public onCvClicked() {
    this.router.navigate(['/cv']);
  }

  public onResumeClicked() {

  }
}
