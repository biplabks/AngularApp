import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  states = ['IL', 'MN', 'NY', 'VA', 'TN'];
  user = {
    firstName: null,
    lastName: null,
    email: null,
    address: {
      state: null
    }
  };

  constructor(private userService: UserService, private router: Router) { }

  addUser() {
    this.userService.addUser(this.user)
      .subscribe(user => {
        console.log(user);
        this.router.navigate(['/users']);
      });
  }

  ngOnInit(): void {
    
  }
}
