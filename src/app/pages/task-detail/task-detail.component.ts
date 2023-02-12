import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
    private loc: Location
  ) { }

  db  = getFirestore();
  taskId: string;
  currTask: Task;

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(paramMap => {
      this.taskId = paramMap.get('id');
      this.getTask();
    });
  }

  async getTask() {
    const docRef = doc(this.db, "tasks", this.taskId);
    const docSnap = await getDoc(docRef);
    this.currTask = new Task(docSnap.data());
    console.log(this.currTask);
  }

  goBack() {
      this.loc.back();
  }

}
