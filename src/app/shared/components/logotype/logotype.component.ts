import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logotype',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logotype.component.html',
  styleUrls: ['./logotype.component.css'],
})
export class LogotypeComponent {
  @Input() color = '';
}
