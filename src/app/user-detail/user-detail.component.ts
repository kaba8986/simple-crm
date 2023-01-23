import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  userId: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log(this.userId);
    })
  }

}
