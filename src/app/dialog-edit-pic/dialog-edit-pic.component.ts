import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/user.class';

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

  userId: string;
  user: User;
  images = ['profile0', 'profile1'];

  ngOnInit(): void {

  }



  setPic(img: string) {
    console.log(this.user);
    this.user.img = img;
    this.firestore
    .collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(() => {
      this.dialogRef.close();
    })
    console.log(this.user);

  }

}
