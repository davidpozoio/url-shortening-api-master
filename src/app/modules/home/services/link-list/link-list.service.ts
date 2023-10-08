import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ShortenedLinkResponse } from 'src/app/models/shortened-link.model';

@Injectable({
  providedIn: 'root',
})
export class LinkListService {
  #linkList: BehaviorSubject<ShortenedLinkResponse[]>;

  constructor() {
    this.#linkList = new BehaviorSubject<ShortenedLinkResponse[]>([]);
  }

  getAll() {
    return this.#linkList.asObservable();
  }

  addNewLink(link: ShortenedLinkResponse) {
    this.#linkList
      .asObservable()
      .pipe(take(1))
      .subscribe((res) => {
        this.#linkList.next([...res, link]);
      });
  }
}
