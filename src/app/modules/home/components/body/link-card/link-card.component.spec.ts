import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCardComponent } from './link-card.component';
import { Clipboard } from '@angular/cdk/clipboard';

describe('LinkCardComponent', () => {
  let component: LinkCardComponent;
  let clipboard: Clipboard;
  let fixture: ComponentFixture<LinkCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinkCardComponent],
    });
    fixture = TestBed.createComponent(LinkCardComponent);
    component = fixture.componentInstance;
    clipboard = TestBed.inject(Clipboard);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul exist preview of original link and the new link', () => {
    const compiled = fixture.nativeElement;
    const originalLink = compiled.querySelector('.original-link');
    const newLink = compiled.querySelector('.short-link');

    expect(originalLink).toBeTruthy();
    expect(newLink).toBeTruthy();
  });

  it('should exist copy button', () => {
    const compiled = fixture.nativeElement;
    const copyButton = compiled.querySelector('.copy-button');

    expect(copyButton).toBeTruthy();
  });

  it('should copy shortened link to clipboard', () => {
    const copySpy = spyOn(clipboard, 'copy');
    component.copyShortLink();
    expect(copySpy).toHaveBeenCalled();
  });

  it('should text of button change when I copy to Copied!', () => {
    const compiled = fixture.nativeElement;
    const copyButton = compiled.querySelector('.copy-button');
    component.copyShortLink();
    fixture.detectChanges();
    expect(copyButton.textContent).toContain('Copied!');
  });
});
