import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewTaskComponent } from 'src/app/components/dialog-new-task/dialog-new-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  colHeads = ['To do', 'In Progress', 'Awaiting Feedback', 'Done'];

  ngOnInit(): void {
  }

  openDialog(sub: string) {
    this.dialog.open(DialogNewTaskComponent);
  }

}
