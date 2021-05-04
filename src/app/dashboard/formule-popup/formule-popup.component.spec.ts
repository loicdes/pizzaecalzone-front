import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulePopupComponent } from './formule-popup.component';

describe('FormulePopupComponent', () => {
  let component: FormulePopupComponent;
  let fixture: ComponentFixture<FormulePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
