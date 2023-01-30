import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTaskComponent } from 'src/app/components/dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  colHeads = [
    {value: 0, name: 'To do' },
    {value: 1, name: 'In Progress' },
    {value: 2, name: 'Awaiting Feedback' },
    {value: 3, name: 'Done' }
  ];

  allTasks: any = [];

  ngOnInit(): void {
    this.firestore.collection('tasks').valueChanges().subscribe((data: any) => {
      this.allTasks = data;
    })
  }

  openDialog(sub: number) {
    const dialog = this.dialog.open(DialogAddTaskComponent);
    dialog.componentInstance.status = sub;
  }

}
