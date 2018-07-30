import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollClassListComponent } from './enroll-class-list.component';

describe('EnrollClassListComponent', () => {
  let component: EnrollClassListComponent;
  let fixture: ComponentFixture<EnrollClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
