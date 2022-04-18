import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../core/auth";
import {User} from "../../../../models/users";

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
})
export class ProfileLayoutComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUserByToken().subscribe(
      user => {
        this.user = user
      }
    );
  }
}
