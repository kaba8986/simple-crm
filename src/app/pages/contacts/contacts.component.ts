import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';
import { DialogAddContactComponent } from '../../dialog-add-contact/dialog-add-contact.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contact = new Contact();
  allContacts: any = [];
  sortedContacts: any = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.firestore
      .collection('contacts', ref => ref.orderBy('lastName')) //Sort User-Array alphabetically by lastname
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.allContacts = changes;
      })
  }

  openDialog() {
    this.dialog.open(DialogAddContactComponent);
  }
}
