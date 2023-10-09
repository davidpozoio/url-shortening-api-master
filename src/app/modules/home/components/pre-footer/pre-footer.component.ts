import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Card } from './model/card.model';

@Component({
  selector: 'app-pre-footer',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css'],
})
export class PreFooterComponent {
  cards: Card[];

  constructor() {
    this.cards = [
      {
        title: 'Brand Recognition',
        description: 'lorem',
        icon: '../../../../../../assets/images/icon-brand-recognition.svg',
      },
      {
        title: 'Detailed Records',
        description: 'lorem',
        icon: '../../../../../../assets/images/icon-detailed-records.svg',
      },
      {
        title: 'Fully Customizable',
        description: 'lorem',
        icon: '../../../../../../assets/images/icon-fully-customizable.svg',
      },
    ];
  }
}
