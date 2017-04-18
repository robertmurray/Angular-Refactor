import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 data: Object;
 loading: boolean;

 constructor(public http: Http) {
   this.http = http;
 }

 makeRequest(): void {
   this.loading = true;
   this.http.request('http://cheeswhiz.herokuapp.com/api/cheese')
     .subscribe((res: Response) => {
      console.log('Response is -------', res)
       this.data = res.json();
       this.loading = false;
     });
 }

  ngOnInit() {
  }

}
