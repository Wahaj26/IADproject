import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnClassComponent } from './own-class.component';

describe('OwnClassComponent', () => {
  let component: OwnClassComponent;
  let fixture: ComponentFixture<OwnClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
