import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

import { Task } from 'src/models/task.class';


@Component({
  selector: 'app-dialog-new-task',
  templateUrl: './dialog-new-task.component.html',
  styleUrls: ['./dialog-new-task.component.scss']
})
export class DialogNewTaskComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private dataservice: DataService) { }

  task = new Task();
  loading = 'false';
  categories = ['Design', 'Sale', 'Media', 'Backoffice'];
  contacts = new FormControl('');
  contactList: any = [];
  

  ngOnInit(): void {
    
    this.firestore
      .collection('contacts', ref => ref.orderBy('lastName')) //Sort User-Array alphabetically by lastname
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        this.contactList = changes;
      })

      setTimeout(()=> {
        console.log(this.contactList);
      }, 2000)

  }


}
