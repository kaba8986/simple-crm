import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  async login(): Promise<void> {
    // await this.afAuth.signInWithEmailAndPassword();
  }

  currentUserID: string;
  currentUser: JSON;
  displayName: string;
}
