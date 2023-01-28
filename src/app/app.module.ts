import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DialogAddContactComponent } from './components/dialog-add-contact/dialog-add-contact.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DialogEditAddressComponent } from './components/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './components/dialog-edit-user/dialog-edit-user.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DialogEditPicComponent } from './components/dialog-edit-pic/dialog-edit-pic.component';
import { DialogDeleteWarningComponent } from './components/dialog-delete-warning/dialog-delete-warning.component';
import { DialogNewTaskComponent } from './components/dialog-new-task/dialog-new-task.component';

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
    DialogDeleteWarningComponent,
    DialogNewTaskComponent
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
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [{ provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
