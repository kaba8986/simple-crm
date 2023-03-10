import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  loading = false;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }


}
