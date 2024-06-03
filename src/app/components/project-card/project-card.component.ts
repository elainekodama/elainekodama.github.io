import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css', '../../global-styles.css'],
  animations: [
    trigger('fade', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(20vh)' }),
        animate(600)
      ]),
      transition('* => void', [
        animate(600, style({ transform: 'translateY(20vh)' }))
      ])
    ])
  ]
})
export class ProjectCardComponent {
  @Input("imageSource") public imageSource!: string;
  @Input("title") public title!: string;
  @Input("tech") public techStack!: string;
  @Input("description") public description!: string;
  @Input("flip") public flip: boolean = false;
}
