import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkFormComponent } from './link-form.component';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LinkService } from '../../../services/link/link.service';
import { LinkListService } from '../../../services/link-list/link-list.service';
import { of } from 'rxjs';
import { ShortenedLinkResponse } from 'src/app/models/shortened-link.model';

describe('LinkFormComponent', () => {
  let component: LinkFormComponent;
  let link: LinkService;
  let linkList: LinkListService;
  let fixture: ComponentFixture<LinkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinkFormComponent, HttpClientModule],
      providers: [LinkService, LinkListService],
    });
    link = TestBed.inject(LinkService);
    linkList = TestBed.inject(LinkListService);
    fixture = TestBed.createComponent(LinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input', () => {
    const $input = fixture.debugElement.query(By.css('.input'));
    expect($input).toBeTruthy();
  });

  it('should have an error message for required input', () => {
    const compiled = fixture.nativeElement;
    component.onSubmit();
    fixture.detectChanges();
    const errorMessage = compiled.querySelector('.required-error');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Please add a link');
  });

  it('should disable button when input is invalid', async () => {
    const compiled = fixture.nativeElement;

    component.linkControl.setValue('');
    component.onSubmit();
    fixture.detectChanges();
    const button = compiled.querySelector('.button');
    expect(button).toBeTruthy();
    expect(button.disabled).toBeTrue();

    component.linkControl.setValue('example');
    await delay(300);
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });

  it('should add a new link', () => {
    const mockedShortResponse: ShortenedLinkResponse = {
      ok: true,
      shortLink: 'example.org/very/long/link.html',
      originalLink: 'example.org/very/long/link.html',
    };

    const shortSpy = spyOn(link, 'short');
    const addNewLinkSpy = spyOn(linkList, 'addNewLink');

    shortSpy.and.returnValue(of<ShortenedLinkResponse>(mockedShortResponse));
    component.linkControl.setValue('example.org/very/long/link.html');
    component.onSubmit();
    expect(shortSpy).toHaveBeenCalled();
    expect(addNewLinkSpy).toHaveBeenCalled();
  });
});

function delay(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
