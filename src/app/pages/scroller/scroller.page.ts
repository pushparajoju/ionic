import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.page.html',
  styleUrls: ['./scroller.page.scss'],
})
export class ScrollerPage implements OnInit {
  users = [];
  page = 0;
  maximumPages = 3;
 
  constructor(private httpClient: HttpClient) { this.loadUsers(); }
  ngOnInit () {}
  loadUsers(event?) {
    this.httpClient
      .get(`https://randomuser.me/api/?results=20&page=${this.page}`)
      .subscribe(res => {
        this.users = this.users.concat(res["results"]);
        if (event) {
          event.target.complete();
        }
      });
  }
 
  loadMore(event) {
    this.page++;
    this.loadUsers(event);
 
    if (this.page === this.maximumPages) {
      event.target.disabled = true;
    }
  }

}
