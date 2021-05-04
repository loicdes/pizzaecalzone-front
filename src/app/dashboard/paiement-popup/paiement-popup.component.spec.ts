import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementPopupComponent } from './paiement-popup.component';

describe('PaiementPopupComponent', () => {
  let component: PaiementPopupComponent;
  let fixture: ComponentFixture<PaiementPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
