import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { DialogDeleteWarningComponent } from 'src/app/components/dialog-delete-warning/dialog-delete-warning.component';
import { DialogEditTaskComponent } from 'src/app/components/dialog-edit-task/dialog-edit-task.component';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private loc: Location,
    private firestore: AngularFirestore,
    private dialog: MatDialog
  ) { }

  db  = getFirestore();
  taskId: string;
  currTask: Task = new Task();
  today = new Date();
  daysOverDate: number;
  hoursOverDate: number;

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(paramMap => {
      this.taskId = paramMap.get('id');
      this.getTask();
    });
  }

  getTask() {
    this.firestore
    .collection('tasks')
    .doc(this.taskId)
    .valueChanges()
    .subscribe((task: any) => {
      this.currTask = new Task(task);
      this.checkDueDate(this.currTask);
    })
  }

  checkDueDate(task: any) {
    return task.dueDate.seconds*1000 - this.today.getTime();
  }

  goBack() {
      this.loc.back();
  }

  editTask() {
    const dialog = this.dialog.open(DialogEditTaskComponent);
    dialog.componentInstance.currTask = new Task(this.currTask.toJSON())
    dialog.componentInstance.taskId = this.taskId;
  }

  deleteTask() {
    const dialog = this.dialog.open(DialogDeleteWarningComponent);
    dialog.componentInstance.currId = this.taskId;
    dialog.componentInstance.collection = 'tasks';
  }

}
