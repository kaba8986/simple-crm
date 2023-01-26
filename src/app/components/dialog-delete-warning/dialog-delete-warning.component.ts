import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-warning',
  templateUrl: './dialog-delete-warning.component.html',
  styleUrls: ['./dialog-delete-warning.component.scss']
})
export class DialogDeleteWarningComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteWarningComponent>,
    private firestore: AngularFirestore
    ) { }

    contactId: string;

  ngOnInit(): void {
  }

  deleteEntry() {
    this.firestore
    .collection('contacts')
    .doc(this.contactId)
    .delete()
    .then(() => this.dialogRef.close())
  }

}
