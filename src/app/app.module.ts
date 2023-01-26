import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogAddContactComponent } from './dialog-add-contact/dialog-add-contact.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DialogEditPicComponent } from './dialog-edit-pic/dialog-edit-pic.component';
import { DialogDeleteWarningComponent } from './dialog-delete-warning/dialog-delete-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactsComponent,
    DashboardComponent,
    DialogAddContactComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
    TasksComponent,
    DialogEditPicComponent,
    DialogDeleteWarningComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
