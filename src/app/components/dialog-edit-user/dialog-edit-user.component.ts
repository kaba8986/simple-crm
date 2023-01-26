import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private firestore: AngularFirestore
    ) { }

  contact: Contact;
  contactId: string;
  loading = false;
  // birthDate: Date;

  ngOnInit(): void {

  }

  saveUser() {
    this.contact.birthDateString = this.contact.birthDate.toLocaleDateString();
    this.firestore
    .collection('contacts')
    .doc(this.contactId)
    .update(this.contact.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }
}
