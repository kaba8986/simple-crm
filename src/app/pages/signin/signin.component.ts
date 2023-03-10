import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/services/auth.service';
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading = false;
  newUser: User = new User();

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {}
}
