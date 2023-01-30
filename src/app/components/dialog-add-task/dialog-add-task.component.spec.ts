import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewTaskComponent } from './dialog-add-task.component';

describe('DialogNewTaskComponent', () => {
  let component: DialogNewTaskComponent;
  let fixture: ComponentFixture<DialogNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
