import { Component } from '@angular/core';
import { HttpParams,HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testApp';
  users: any
  url: string;
  email: string | undefined;

  constructor(private httpClient: HttpClient) {
    this.users = [];
    this.url = 'https://jsonplaceholder.typicode.com/users'
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.httpClient.get(this.url).subscribe(users => {
      console.log('users:', users)
      this.users = users

    });
  }

  get(id: number) {
    console.log('get id');
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe((user:any) => {
      if (user) {
        this.email = user?.email;
        console.log('user:', user);
      }


    });
  }
}
