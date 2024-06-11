import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './model/dummy_user';
import { TaksComponent } from './taks/taks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UserComponent ,HeaderComponent, TaksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users= DUMMY_USERS;
  selectedUserId? : string;


  onselectUser(id: string){
    this.selectedUserId=id;
  }

  get selectedUser(){
    return this.users.find((user)=> 
      user.id=== this.selectedUserId)! 
  }
}
