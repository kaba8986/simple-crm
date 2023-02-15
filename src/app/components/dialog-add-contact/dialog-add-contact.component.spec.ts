import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

import { DialogAddContactComponent } from './dialog-add-contact.component';

describe('DialogAddUserComponent', () => {
  let component: DialogAddContactComponent;
  let fixture: ComponentFixture<DialogAddContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddContactComponent ],
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
