import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/shares/services/auth.service';
import { DataService } from 'src/app/shares/services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currUser: any;

  constructor(
    public _authService: AuthService,
    private _dataService: DataService,
    public _afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { 

  }

  ngOnInit(): void {
    this._afAuth.authState.subscribe((user) => {
      if(user) {

        
      }
    })

    setTimeout(() => {

    }, 3000)

  }

}
