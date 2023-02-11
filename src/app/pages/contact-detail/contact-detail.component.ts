import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Contact } from 'src/models/contact.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../../components/dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../../components/dialog-edit-user/dialog-edit-user.component';
import { DialogEditPicComponent } from '../../components/dialog-edit-pic/dialog-edit-pic.component';
import { Location } from '@angular/common';
import { DialogDeleteWarningComponent } from '../../components/dialog-delete-warning/dialog-delete-warning.component';
import { GetUserByIdService } from 'src/app/services/get-user-by-id.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    public dialog: MatDialog,
    private _location: Location,

    ) { }

  contactId: string;
  currContact: Contact = new Contact ();

  ngOnInit(): void {
    this.route.paramMap
    .subscribe( paramMap => {
      this.contactId = paramMap.get('id');
      this.getContact();
    })
  }

  getContact() {
    this.firestore
    .collection('contacts')
    .doc(this.contactId)
    .valueChanges()
    .subscribe((contact: any) => {
      this.currContact = new Contact(contact);
    })
  }



  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.contact = new Contact(this.currContact.toJSON()); // neuer Nutzer als Kopie des aktuellen wird erstellt um Nutzeränderungen nicht schon beim Tippen (ngModel) zu erhalten
    dialog.componentInstance.contactId = this.contactId;
  }

  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.contact = new Contact(this.currContact.toJSON())
    dialog.componentInstance.contactId = this.contactId;
  }

  editPic() {
    const dialog = this.dialog.open(DialogEditPicComponent);
    dialog.componentInstance.contact = new Contact(this.currContact.toJSON())
    dialog.componentInstance.contactId = this.contactId;
  }

  deleteUser() {
    const dialog = this.dialog.open(DialogDeleteWarningComponent);
    dialog.componentInstance.contactId = this.contactId;
  }

  pageBack() {
    this._location.back();
  }

}
