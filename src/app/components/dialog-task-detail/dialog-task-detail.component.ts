import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task.class';

@Component({
  selector: 'app-dialog-task-detail',
  templateUrl: './dialog-task-detail.component.html',
  styleUrls: ['./dialog-task-detail.component.scss']
})
export class DialogTaskDetailComponent implements OnInit {

  constructor() { }

  openedTask = new Task ();

  ngOnInit(): void {
    console.log(this.openedTask);
  }

}
