import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedButtonComponent } from 'src/app/shared/components/get-started-button/get-started-button.component';

@Component({
  selector: 'app-header-body',
  standalone: true,
  imports: [CommonModule, GetStartedButtonComponent],
  templateUrl: './header-body.component.html',
  styleUrls: ['./header-body.component.css'],
})
export class HeaderBodyComponent {
  constructor() {}
}
