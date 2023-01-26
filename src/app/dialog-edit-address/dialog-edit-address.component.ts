import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>, 
    private firestore: AngularFirestore
    ) { }

  contact: Contact;
  contactId: string;
  loading = false;

  ngOnInit(): void {
  }

  saveContact() {
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
