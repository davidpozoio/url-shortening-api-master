import { TestBed } from '@angular/core/testing';

import { LinkService } from './link.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environment/environment';

describe('LinkService', () => {
  let service: LinkService;
  let htppController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(LinkService);
    htppController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    htppController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return shortened link', () => {
    const link = 'example.org/very/long/link.html';
    const mockedResponse = {
      ok: true,
      result: {
        code: 'Q3xztd',
        short_link: 'shrtco.de/Q3xztd',
        full_short_link: 'https://shrtco.de/Q3xztd',
        short_link2: '9qr.de/Q3xztd',
        full_short_link2: 'https://9qr.de/Q3xztd',
        short_link3: 'shiny.link/Q3xztd',
        full_short_link3: 'https://shiny.link/Q3xztd',
        share_link: 'shrtco.de/share/Q3xztd',
        full_share_link: 'https://shrtco.de/share/Q3xztd',
        original_link: 'http://example.org/very/long/link.html',
      },
    };
    const mockedResult = {
      ok: true,
      shortLink: 'shrtco.de/Q3xztd',
      originalLink: 'example.org/very/long/link.html',
    };

    service.short(link).subscribe((res) => {
      expect(res).toEqual(mockedResult);
    });

    const req = htppController.expectOne(
      `${environment.apiLinkShortener}/shorten?url=${link}`
    );
    req.flush(mockedResponse);
  });
});
