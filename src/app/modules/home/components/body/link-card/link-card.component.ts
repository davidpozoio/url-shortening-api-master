import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-link-card',
  standalone: true,
  imports: [CommonModule, ClipboardModule],
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css'],
})
export class LinkCardComponent {
  @Input() link = '';
  @Input() shortenedLink = '';
  buttonText = 'Copy';

  #clipboard = inject(Clipboard);

  copyShortLink() {
    this.#clipboard.copy(this.shortenedLink);
    this.buttonText = 'Copied!';
  }
}
