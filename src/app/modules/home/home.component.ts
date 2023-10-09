import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { LinkService } from './services/link/link.service';
import { HttpClientModule } from '@angular/common/http';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtraSectionComponent } from './components/extra-section/extra-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BodyComponent,
    HttpClientModule,
    PreFooterComponent,
    FooterComponent,
    ExtraSectionComponent,
  ],
  providers: [LinkService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
