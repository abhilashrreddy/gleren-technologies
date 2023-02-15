import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-view-data',
  templateUrl: './user-view-data.component.html',
  styleUrls: ['./user-view-data.component.css'],
})
export class UserViewDataComponent implements OnInit {
  color = '#5363BD';
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'city'];
  dataSource;
  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.user.getUsers().subscribe((products) => (this.dataSource = products));
  }

  exit() {
    this.router.navigate(['']);
  }
}
