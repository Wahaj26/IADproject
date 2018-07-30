import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewTaskComponent } from './admin-view-task.component';

describe('AdminViewTaskComponent', () => {
  let component: AdminViewTaskComponent;
  let fixture: ComponentFixture<AdminViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
