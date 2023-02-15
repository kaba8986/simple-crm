import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
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
    private firestore: AngularFirestore
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

}
