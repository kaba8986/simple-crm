import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

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


  getUserById(userId: string) {
    return this.firestore.collection('users').doc(userId).snapshotChanges();
  }
  
}
