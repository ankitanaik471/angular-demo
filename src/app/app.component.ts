import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-user-data';
  prize = '100';
  users: any;
  searchText: string = '';
  
  constructor(private userdata: UsersDataService)
  {
    userdata.getRequest().subscribe((response) => {
      this.users = response;
    }, err => {});
  }

  onSearchTextEntered(searchValue: any){
    this.searchText = searchValue;
  }
}
