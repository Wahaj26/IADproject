import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnClassListComponent } from './own-class-list.component';

describe('OwnClassListComponent', () => {
  let component: OwnClassListComponent;
  let fixture: ComponentFixture<OwnClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
