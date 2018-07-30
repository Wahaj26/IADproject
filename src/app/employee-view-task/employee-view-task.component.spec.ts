import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewTaskComponent } from './employee-view-task.component';

describe('EmployeeViewTaskComponent', () => {
  let component: EmployeeViewTaskComponent;
  let fixture: ComponentFixture<EmployeeViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
