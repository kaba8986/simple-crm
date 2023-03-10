import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;

  /*
  loginForm: FormGroup;
  */

  constructor(
    /*
    public auth: Auth,
    private fb: FormBuilder,
    public as: AuthService,
    public router: Router,
    private firestore: AngularFirestore
    */
  ) { }

  ngOnInit(): void {
    /*
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    */
  }

  /*
  login() {
    signInWithEmailAndPassword(this.auth, this.loginForm.value.email, this.loginForm.value.password)
    .then((response: any) => {
      // Signed in 
      const uid = response.user.uid;
      this.as.currentUserID = uid;
      // this.as.currentUser = response.user;
      // console.log(this.as.currentUser);
      this.getLoggedUser(uid);
      // this.router.navigate(['/'])
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  getLoggedUser(id: string) {
    this.firestore
    .collection('users')
    .doc(id)
    .valueChanges()
    .subscribe((data: any) => {
      this.as.currentUser = data;
      // console.log(this.as.currentUser);
    })

  }
  */

}
