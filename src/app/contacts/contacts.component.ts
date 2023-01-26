import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Contact } from 'src/models/contact.class';
import { DialogAddContactComponent } from '../dialog-add-contact/dialog-add-contact.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contact = new Contact();   
  allContacts = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
    .collection('contacts')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes:any) => {
      this.allContacts = changes;
    })
    //Sort User-Array alphabetically by lastname
    this.allContacts.sort((a:any, b:any) => {
      return this.compareStrings(a.lastName, b.lastName)
    })
    
  }

  openDialog() {
    this.dialog.open(DialogAddContactComponent);
  }

  compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
  
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }



}
