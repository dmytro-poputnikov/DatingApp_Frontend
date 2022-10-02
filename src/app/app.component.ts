import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DatingApp_Frontend';
  users: any;

  $users = this.http.get('https://localhost/api/users');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (res) => (this.users = res),
      error: (e) => console.error(e),
    });
  }
}
