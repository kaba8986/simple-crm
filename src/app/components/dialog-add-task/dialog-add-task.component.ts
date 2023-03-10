import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { throttleTime } from 'rxjs';
import { DataService } from 'src/app/shares/services/data.service';


import { Task } from 'src/models/task.class';


@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class DialogAddTaskComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    private dataservice: DataService,
    private dialogRef: MatDialogRef<DialogAddTaskComponent>
    ) {
      this.minDate = new Date();
     }

  task = new Task();
  loading = 'false';
  categories = ['General', 'Design', 'Sale', 'Media', 'Backoffice'];
  // status = ['to do', 'in progress', 'awaiting feedback', 'done'];
  minDate: Date;
  contacts = new FormControl('');
  contactList: any = [];

  title = new FormControl('', [Validators.required]);
  text = new FormControl('', [Validators.required]);


  ngOnInit(): void {

    this.firestore
      .collection('contacts', ref => ref.orderBy('lastName')) //Sort User-Array alphabetically by lastname
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.contactList = changes;
      })
  }

  saveTask() {
    if (this.validateForm()) {

      this.task.creationDateString = this.task.creationDate.toDateString();
      this.task.creationDateMilli = this.task.creationDate.getTime();
      if(this.task.dueDate != "") {
        this.task.dueDateString = this.task.dueDate.toDateString();
        this.task.dueDateMilli = this.task.dueDate.getTime();
      }
      this.firestore.collection('tasks').add(this.task.toJSON());
      this.dialogRef.close();

    }
  }

  validateForm() {
    return (!this.title.hasError('required') && !this.text.hasError('required'));
  }

  getErrorMessage() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }
  }

}
