import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

import { Task } from 'src/models/task.class';


@Component({
  selector: 'app-dialog-new-task',
  templateUrl: './dialog-new-task.component.html',
  styleUrls: ['./dialog-new-task.component.scss'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class DialogNewTaskComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private dataservice: DataService) { }

  task = new Task();
  loading = 'false';
  categories = ['Design', 'Sale', 'Media', 'Backoffice'];
  status = ['to do', 'in progress', 'awaiting feedback', 'done'];
  prios = ['high', 'middle', 'low'];
  panelColor = new FormControl('red');
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
