import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedButtonComponent } from './get-started-button.component';
import { ViewportScroller } from '@angular/common';

describe('GetStartedButtonComponent', () => {
  let component: GetStartedButtonComponent;
  let fixture: ComponentFixture<GetStartedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GetStartedButtonComponent],
    });
    fixture = TestBed.createComponent(GetStartedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus and scroll to link form', () => {
    const scroller = TestBed.inject(ViewportScroller);
    spyOn(scroller, 'scrollToAnchor');
    component.scrollToLinkForm();
    expect(scroller.scrollToAnchor).toHaveBeenCalled();
  });
});
