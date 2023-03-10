import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User } from 'src/models/user.class';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loggedIn = false;
  loggedId: string;

  loggedUser = new User();

  constructor(
    public as: AuthService,
    private firestore: AngularFirestore
  ) { }

  ngOninit(): void {
    this.checkIfUser();
  }

  checkIfUser() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedId = user.uid;
        this.loggedIn = true;
        this.getLoggedUser(this.loggedId);
      } else {
        console.log('Currently no user logged in.') 
        this.loggedIn = false;
      }
    });
  }

  getLoggedUser(id: string) {
    this.firestore
    .collection('users')
    .doc(id)
    .valueChanges()
    .subscribe((data: any) => {
      this.loggedUser = data;
      console.log('Logged user is: ', this.loggedUser);
    })
  }

  login() {

  }

  logout() {

  }
}
