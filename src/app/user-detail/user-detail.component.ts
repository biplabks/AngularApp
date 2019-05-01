import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  user;

  constructor(private route: ActivatedRoute, private userService: UserService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getUserById(params.id)
      .subscribe(user => 
        this.user = JSON.stringify(user));
    });
  }
}
