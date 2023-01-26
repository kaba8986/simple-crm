import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/models/contact.class';

@Component({
  selector: 'app-dialog-edit-pic',
  templateUrl: './dialog-edit-pic.component.html',
  styleUrls: ['./dialog-edit-pic.component.scss']
})
export class DialogEditPicComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogEditPicComponent>
  ) { }

  contactId: string;
  contact: Contact;
  images = ['profile0', 'profile1'];

  ngOnInit(): void {

  }



  setPic(img: string) {
    console.log(this.contact);
    this.contact.img = img;
    this.firestore
    .collection('contacts')
    .doc(this.contactId)
    .update(this.contact.toJSON())
    .then(() => {
      this.dialogRef.close();
    })
  }

}
