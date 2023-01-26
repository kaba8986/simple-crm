import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteWarningComponent } from './dialog-delete-warning.component';

describe('DialogDeleteWarningComponent', () => {
  let component: DialogDeleteWarningComponent;
  let fixture: ComponentFixture<DialogDeleteWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
