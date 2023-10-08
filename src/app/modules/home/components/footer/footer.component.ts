import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotypeComponent } from 'src/app/shared/components/logotype/logotype.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogotypeComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
