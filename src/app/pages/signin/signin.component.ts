import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { User } from 'src/models/user.class';
import { doc, getFirestore, setDoc } from "firebase/firestore"; 
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading = false;
  /*
  user = new User();
  db = getFirestore();

  public signUpForm: FormGroup;
  */

  constructor(
    /*
    private fb: FormBuilder,
    private auth: Auth,
    */
    private router: Router
  ) { }

  ngOnInit(): void {
    /*
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    */
  }

  /*
  register() {
    createUserWithEmailAndPassword(this.auth, this.signUpForm.value.email, this.signUpForm.value.password)
    .then((response: any) => {
      // Signed in 
      const uid = response.user.uid;

      this.createOnFirestore(uid);
      this.router.navigate(['success']);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }


  async createOnFirestore(id: string) {
    this.user.userID = id;
    console.log(this.user.toJson());
    await setDoc(doc(this.db, "users", id), this.user.toJson());
  }
    */

}
