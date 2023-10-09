import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedButtonComponent } from 'src/app/shared/components/get-started-button/get-started-button.component';

@Component({
  selector: 'app-extra-section',
  standalone: true,
  imports: [CommonModule, GetStartedButtonComponent],
  templateUrl: './extra-section.component.html',
  styleUrls: ['./extra-section.component.css'],
})
export class ExtraSectionComponent {}
