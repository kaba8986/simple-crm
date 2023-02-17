import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;

  public loginForm: FormGroup;

  constructor(
    private auth: Auth,
    private fb: FormBuilder,
    public as: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    signInWithEmailAndPassword(this.auth, this.loginForm.value.email, this.loginForm.value.password)
    .then((response: any) => {
      // Signed in 
      const uid = response.user.uid;
      this.as.currentUserID = uid;
      this.as.currentUser = response.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
  }

}
