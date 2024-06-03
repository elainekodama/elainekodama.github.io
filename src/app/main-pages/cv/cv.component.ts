import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css', '../../global-styles.css']
})
export class CVComponent {
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;

  ngAfterViewInit() {
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {

    });
  }
  public experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Vantage MedTech',
      location: 'Moonachie, NJ/(I) June 2022-March 2024/ (II) March 2024-Present',
      points: [
        'Participated in full lifecycle projects including drafting planning and release documents for FDA submission and formal testing',
        'Developed UI/UX and BLE protocol with React Native for a firmware controller mobile app to bring a psychiatric medical device to clinical trials',
        'Architected and implemented a client-server cross-platform mobile app with React Native and C#/ASP.NET for a limited release home-user study',
        "Served as a full-stack developer on a Windows-based desktop application port into a web-based platform for treatment planning, including the redesign of the UI with Angular and the re-architecture of the server solution utilizing AWS tools"
      ]
    },
    {
      title: 'Teaching Assistant/Grader (ITP-368)',
      company: 'Viterbi School of Engineering—USC',
      location: 'Los Angeles, CA/Spring 2022',
      points: [
        'Supported Professor Barret Koster in an upper-division graphical user interface class',
        'Assisted students in utilizing the JavaFX library, applying principles of object-oriented programming, and understanding fundamental design aspects such as accessibility, localization, and best-practice software design',
        'Provides help on assignments and learning concepts in class two hours a week, and in office hours four hours a week',
        'Grades half of the weekly assignments and labs for a class of ~30 students'
      ]
    },
    {
      title: 'Teaching Assistant/Grader (ITP-265)',
      company: 'Viterbi School of Engineering—USC',
      location: 'Los Angeles, CA/Fall 2021, Spring 2022',
      points: [
        'Reinforced key concepts of inheritance, polymorphism, abstract classes and interfaces to help students understand object-oriented design',
        'Aided students in office hours two hours a week and during class four hours a week for two class sections of ~40 students',
        'Collaborated every week with professor and other teaching assistants to prepare lecture material, homework assignments, and exams'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Center for Neural Engineering—USC',
      location: 'Los Angeles, CA/January – November 2021',
      points: [
        'Collaborated with a team to identify key mechanisms involving mitochondria in the development of neurodegenerative diseases',
        'Developed brain cell models to isolate each energy-consuming mechanisms in NEURON for 8 hours a week',
        'Received $3000 funding from Summer Undergraduate Research Fund to facilitate one-on-one mentoring with faculty'
      ]
    },
    {
      title: 'Medical Scribe',
      company: 'Digestive Disease Consultants (Dr. Kevin Kodama)',
      location: 'Fresno, CA/May – August 2018, 2019',
      points: [
        'Documented ~23 gastroenterology patient (in-office) encounters a day into EPIC medical records, including patients’ chief complaints; physician’s assessment and plan; and medication, procedure, lab, and/or referral orders (SOAP)',
        'Developed clinical experience by learning medical terminology and proper medical record documentation'
      ]
    },
    {
      title: 'Student Ambassador',
      company: 'Vanderbilt Call Center',
      location: 'Nashville, TN/August - December 2018',
      points: [
        'Networked with over 100 Vanderbilt alumni in 8 hours a week to keep them connected to the university',
        'Contributed to raising around $500,000 for university programs, scholarships, and building funds'
      ]
    }
  ]
  public education: School[] = [
    {
      name: 'University of Southern California',
      time: '2019-2022',
      major: 'Environmental Science and Health, B.S., Computer Programming Minor',
      gpa: '3.75/4.00',
      awards: "Magna Cum Laude, Dean's List (6 semesters), Renaissance Scholar, $3000 SURF recipient"
    },
    {
      name: 'Vanderbilt University',
      time: '2018-2019',
      gpa: '3.63/4.00',
      awards: "Dean's List (2 semesters)"
    },
    {
      name: 'Clovis West High School',
      time: '2014-2018',
      gpa: '4.00/4.00',
      awards: "National Honor's Society, CSF"
    }
  ]
  public skills: Skill[] = [
    {
      title: 'Coding Languages',
      subtitle: 'Cross-platform, native iOS',
      items: [
        '2 years: TypeScript/JavaScript, C#, Java, Swift',
        '1 year: HTML, CSS, Python, Java, C++'
      ]
    },
    {
      title: 'Frameworks/Tools',
      subtitle: 'Cross-platform, native iOS',
      items: [
        '2 years: React Native, ASP .NET, Angular, NoSQL, mongo Shell, NPM open-source libraries, CocoaPods',
        'Familiar with gcloud CLI, Docker, SQL Server, Kubernetes, Bash'
      ]
    },
    {
      title: 'Cloud/Deployment',
      subtitle: 'Cross-platform, native iOS',
      items: [
        'Amazon Web Services (AWS): EC2, DocumentDB, S3, Secrets Manager, Cognito',
        'Google Cloud Platform (GCP): Google Kubernetes Engine, Cloud Compute, Cloud Endpoints (ESPv2)',
        'Apple Store Connect, TestFlight, Apple Human Interface Guidelines',
        'Google Play, Google Play Console',
        'Firebase App Distribution',
        'MongoDB Atlas',
      ]
    },
    {
      title: 'Project Management',
      subtitle: 'Cross-platform, native iOS',
      items: [
        'Jira, Notion, Figma'
      ]
    },
    {
      title: 'IDEs',
      subtitle: 'Cross-platform, native iOS',
      items: [
        'Visual Studio, VS Code, XCode, Android Studio',
      ]
    },
    {
      title: 'Miscellaneous',
      subtitle: 'Cross-platform, native iOS',
      items: [
        'Design: MVC, MVVM, Microservices, SOLID principles',
        'Documentation: Lucid, UML Diagrams, cloud architecture diagramming'
      ]
    },
  ]
  // https://ahf.usc.edu/commencement-honors/scholar-distinctions/renaissance/
  // https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=273
  public awards = [
    'Magna Cum Laude',
    'Dean\'s List (7 Semesters)',
    'SURF recipient',
    'Renaissance Scholar'
  ]
}

interface Experience {
  title: string,
  company: string,
  location: string,
  points: string[]
}

interface School {
  name: string,
  time: string,
  major?: string,
  gpa: string,
  awards: string
}

interface Skill {
  title: string,
  subtitle?: string,
  items: string[]
}