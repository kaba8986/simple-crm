import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-contact',
  templateUrl: './dialog-add-contact.component.html',
  styleUrls: ['./dialog-add-contact.component.scss']
})
export class DialogAddContactComponent implements OnInit {

  contact = new Contact();
  // birthDate: Date;
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddContactComponent>) { }

  ngOnInit(): void {
    let date = new Date();

  }

  saveContact() {
    this.loading = true;
    this.contact.birthDateString = this.contact.birthDate.toLocaleDateString();
    // this.user.birthDate = this.birthDate.getTime();
    this.firestore.collection('contacts').add(this.contact.toJSON()).then((result: any) => {
      this.dialogRef.close();
    });
    this.loading = false;


  }

}
