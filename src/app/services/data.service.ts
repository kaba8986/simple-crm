import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  allDatas:any = [];

  getContacts() {
    this.firestore
    .collection('contacts')
    .valueChanges()
    .subscribe((data: any) => {
      return data;
    })
  }
}
