import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Card } from './model/card.model';
import { GetStartedButtonComponent } from 'src/app/shared/components/get-started-button/get-started-button.component';

@Component({
  selector: 'app-pre-footer',
  standalone: true,
  imports: [CommonModule, CardComponent, GetStartedButtonComponent],
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css'],
})
export class PreFooterComponent {
  cards: Card[];

  constructor() {
    this.cards = [
      { title: 'Brand Recognition', description: 'lorem', icon: '' },
      { title: 'Detailed Records', description: 'lorem', icon: '' },
      { title: 'Fully Customizable', description: 'lorem', icon: '' },
    ];
  }
}
