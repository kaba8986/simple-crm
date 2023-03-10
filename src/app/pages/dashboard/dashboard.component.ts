import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shares/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currUser: any;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.authService.isLoggedIn);


  }

}
