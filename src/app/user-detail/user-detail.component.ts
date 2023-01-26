import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditPicComponent } from '../dialog-edit-pic/dialog-edit-pic.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    public dialog: MatDialog
    ) { }

  userId: string;
  currUser: User = new User();

  ngOnInit(): void {
    this.route.paramMap
    .subscribe( paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
  }

  getUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
      this.currUser = new User(user);
    })
  }



  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.currUser.toJSON()); // neuer Nutzer als Kopie des aktuellen wird erstellt um Nutzeränderungen nicht schon beim Tippen (ngModel) zu erhalten
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.currUser.toJSON())
    dialog.componentInstance.userId = this.userId;
  }

  editPic() {
    const dialog = this.dialog.open(DialogEditPicComponent);
    dialog.componentInstance.user = new User(this.currUser.toJSON())
    dialog.componentInstance.userId = this.userId;
  }

  deleteUser() {
    this.firestore
    .collection('users')
    .doc(this.userId)
    .delete()
  }

}
