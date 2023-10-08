import { Component, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-get-started-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-started-button.component.html',
  styleUrls: ['./get-started-button.component.css'],
})
export class GetStartedButtonComponent {
  #scroller = inject(ViewportScroller);

  scrollToLinkForm() {
    this.#scroller.scrollToAnchor('targetInput');
  }
}
