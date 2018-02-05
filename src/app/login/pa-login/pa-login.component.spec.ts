import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaLoginComponent } from './pa-login.component';

describe('PaLoginComponent', () => {
  let component: PaLoginComponent;
  let fixture: ComponentFixture<PaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
