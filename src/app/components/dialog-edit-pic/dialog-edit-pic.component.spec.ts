import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogEditPicComponent } from './dialog-edit-pic.component';

describe('DialogEditPicComponent', () => {
  let component: DialogEditPicComponent;
  let fixture: ComponentFixture<DialogEditPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditPicComponent ],
      providers: [MatDialogModule, AngularFirestore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
