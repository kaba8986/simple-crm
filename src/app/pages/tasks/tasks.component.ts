import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddTaskComponent } from 'src/app/components/dialog-add-task/dialog-add-task.component';
import { DialogTaskDetailComponent } from 'src/app/components/dialog-task-detail/dialog-task-detail.component';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  allTasks: any = [];
  dateString: string;
  loading = 'false';
  filterOptions = ['Priority', 'Date', 'DueDate'];
  dueDateOver = false;
  today = new Date();


  ngOnInit(): void {
    this.firestore.collection('tasks').valueChanges({ idField: 'customIdName' }).subscribe((data: any) => {
      this.allTasks = data;
    })
  }

  openDialog() {
    const dialog = this.dialog.open(DialogAddTaskComponent);
  }
  
  openTaskDetails(k: number) {
    const dialog = this.dialog.open(DialogTaskDetailComponent);
    dialog.componentInstance.openedTask = this.allTasks[k];
  }

  getImgSrc(contactIds: any) {
    const db = getFirestore();
    contactIds.forEach((el) => {
      console.log(doc(db, 'contacts', el));
    });
  }

}
