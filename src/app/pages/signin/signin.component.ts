import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {}
}
