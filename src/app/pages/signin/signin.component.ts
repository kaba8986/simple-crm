import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading = false;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  signin() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

}
