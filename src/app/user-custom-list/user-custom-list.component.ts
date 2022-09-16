import { Component, OnInit } from '@angular/core';
import { UsersCustom } from './UsersCustom';

@Component({
  selector: 'app-user-custom-list',
  templateUrl: './user-custom-list.component.html',
  styleUrls: ['./user-custom-list.component.scss']
})
export class UserCustomListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selctedUsers: any;

  usersList: UsersCustom[] = [
    {id: 1, name: 'Tom', address: 'Aronda', city: 'Aronda', contry: 'IND'},
    {id: 2, name: 'John', address: 'Aronda 1', city: 'Aronda 1', contry: 'IND'},
    {id: 3, name: 'Brutus', address: 'Aronda 2', city: 'Aronda 2', contry: 'IND'},
    {id: 4, name: 'Idalin', address: 'Aronda 3', city: 'Aronda 3', contry: 'IND'},
    {id: 5, name: 'Jhanus', address: 'Aronda 4', city: 'Aronda 4', contry: 'IND'},
    {id: 6, name: 'Meloo', address: 'Aronda 5', city: 'Aronda 5', contry: 'IND'},
    {id: 7, name: 'Cents', address: 'Aronda 6', city: 'Aronda 6', contry: 'IND'},
    {id: 8, name: 'brio', address: 'Aronda 7', city: 'Aronda 7', contry: 'IND'},
    {id: 9, name: 'Cidai', address: 'Aronda 8', city: 'Aronda 8', contry: 'IND'},
    {id: 10, name: 'Turtoo', address: 'Aronda 9', city: 'Aronda 9', contry: 'IND'},
    {id: 11, name: 'Faskoo', address: 'Aronda 10', city: 'Aronda 10', contry: 'IND'}
  ]


}
