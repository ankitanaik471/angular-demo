import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {}

  enterSearchValue : string = '';

  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue);
  }
}
