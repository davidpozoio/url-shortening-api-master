import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkFormComponent } from './link-form/link-form.component';
import { LinkListComponent } from './link-list/link-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, LinkFormComponent, LinkListComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {}
