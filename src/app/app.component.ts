import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User } from 'src/models/user.class';
import { AuthService } from './shares/services/auth.service';


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
    public authService: AuthService,
    private firestore: AngularFirestore
  ) { }

  ngOninit(): void {
    console.log(this.authService.userData);
  }


}
