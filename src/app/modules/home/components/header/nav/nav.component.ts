import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotypeComponent } from 'src/app/shared/components/logotype/logotype.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, LogotypeComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {}
