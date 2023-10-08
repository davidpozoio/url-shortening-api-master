import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderBodyComponent } from './header-body/header-body.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent, HeaderBodyComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
