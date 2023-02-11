import { Injectable } from '@angular/core';
import { doc, getFirestore, getDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class GetUserByIdService {

  constructor() { }

  async getUserById(id: string) {
    const db  = getFirestore();
    const docRef = doc(db, 'contacts', id);
    try { const docSnap = await getDoc(docRef); if(docSnap.exists()) { 
      console.log(docSnap.data()); } else { console.log("Document does not exist") } } 
      catch(error) { console.log(error) }
  }

}
