import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getDocs, updateDoc } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { doc, getDoc, getFirestore } from '@firebase/firestore';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    private dialogRef: MatDialogRef<DialogEditTaskComponent>
  ) { }

  taskId: string;
  currTask: Task;
  loading = false;
  categories = ['Design', 'Sale', 'Media', 'Backoffice'];
  contacts = new FormControl(''); contactList: any = [];
  storedDate: string;
  db = getFirestore();

  title = new FormControl('', [Validators.required]);
  text = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.getContacts();
  }


  
  getContacts() {
    this.firestore
      .collection('contacts', ref => ref.orderBy('lastName')) //Sort User-Array alphabetically by lastname
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.contactList = changes;
      })
      
  }

  async saveTask() {
    this.firestore
    .collection('tasks')
    .doc(this.taskId)
    .update(this.currTask.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }

}
