import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

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

  user: User;
  userId: string;
  loading = false;

  ngOnInit(): void {
  }

  saveUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }

}
