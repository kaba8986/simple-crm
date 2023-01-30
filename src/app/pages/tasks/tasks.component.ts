import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTaskComponent } from 'src/app/components/dialog-add-task/dialog-add-task.component';

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

  openDialog(sub: number) {
    const dialog = this.dialog.open(DialogAddTaskComponent);
    dialog.componentInstance.status = sub;
  }

}
