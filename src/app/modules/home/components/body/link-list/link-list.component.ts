import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkCardComponent } from '../link-card/link-card.component';
import { LinkListService } from '../../../services/link-list/link-list.service';
import { Observable, tap } from 'rxjs';
import { ShortenedLinkResponse } from 'src/app/models/shortened-link.model';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [CommonModule, LinkCardComponent],
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent {
  #linkList = inject(LinkListService);
  linkList$: Observable<ShortenedLinkResponse[]>;

  constructor() {
    this.linkList$ = new Observable();
  }

  ngOnInit() {
    this.linkList$ = this.#linkList.getAll();
    this.#linkList.getAll().subscribe((res) => {
      console.log(res);
    });
  }
}
