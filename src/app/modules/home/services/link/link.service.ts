import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environment/environment';
import {
  ShortenedLink,
  ShortenedLinkResponse,
} from 'src/app/models/shortened-link.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  #http = inject(HttpClient);
  constructor() {}
  short(link: string) {
    return this.#http
      .get<ShortenedLink>(`${environment.apiLinkShortener}/shorten?url=${link}`)
      .pipe(
        map((res) => {
          return {
            ok: res.ok,
            shortLink: res.result.short_link,
            originalLink: link,
          } as ShortenedLinkResponse;
        })
      );
  }
}
